import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExample } from 'store/example/actions';

const PageOne = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExample());
  }, []);
  const { exampledata } = useSelector((state) => state?.exampleReducer);
  console.log(exampledata);
  return <div>PageOne</div>;
};

export default PageOne;
