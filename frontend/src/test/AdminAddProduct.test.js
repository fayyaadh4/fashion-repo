import React from 'react';
import renderer from 'react-test-renderer';
import AdminAddProduct from '../components/AdminAddProduct';

test('renders correctly', () => {
    const tree = renderer
    .create(<AdminAddProduct></AdminAddProduct>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})