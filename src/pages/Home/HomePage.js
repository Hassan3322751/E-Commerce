import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import {
  getAll,
  getAllByTag,
  getAllTags,
  search,
} from '../../services/foodService';
import NotFound from '../../components/NotFound/NotFound';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_REPLACED':
      return { ...state, foods: action.payload };
    case 'FOODS_LOADED':
      return { ...state, foods: [...state.foods, ...action.payload] };
    case 'TAGS_LOADED':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

    setPage(1);
    setHasMore(true);
    const loadFoods = tag
      ? getAllByTag(tag, 1)
      : searchTerm
        ? search(searchTerm, 1)
        : getAll(1);

    loadFoods.then(foods => {
      if (foods.length === 0) {
        setHasMore(false);
      }
      dispatch({ type: 'FOODS_REPLACED', payload: foods });
    });
  }, [searchTerm, tag]);

  const fetchMoreFoods = () => {
    const nextPage = page + 1;
    const loadFoods = tag
      ? getAllByTag(tag, nextPage)
      : searchTerm
        ? search(searchTerm, nextPage)
        : getAll(nextPage);

    loadFoods.then(foods => {
      if (foods.length === 0) {
        setHasMore(false);
      } else {
        dispatch({ type: 'FOODS_LOADED', payload: foods });
        setPage(nextPage);
      }
    });
  };

  const [infiniteRef] = useInfiniteScroll({
    loading: !hasMore,
    hasNextPage: hasMore,
    onLoadMore: fetchMoreFoods,
  });

  return (
    <>
      <Search />
      <Tags tags={tags} />
      {foods.length === 0 && !hasMore && <NotFound linkText="Reset Search" />}
      
      <Thumbnails foods={foods} />

      <div ref={infiniteRef} style={{ height: '20px' }}>
        {hasMore && <h4 style={finishStyle}>Loading...</h4>}
        {!hasMore && <p style={finishStyle}>
          <b>No More Products</b>
        </p>}
      </div>
    </>
  );
}

const finishStyle = {
  marginBottom: '30px',
  textAlign: 'center'
}
