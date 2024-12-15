import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../slices/reducers'; // Импортируйте ваш корневой редьюсер
import App from './App';
import {Content} from '../components/Content'
import store from '../slices/store'



const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
)

test('renders ContentItem components', async () => {
    render(
      <Provider store={store}>
        <Content></Content>
        </Provider>
      );

    // Используем waitFor для ожидания отрисовки компонентов
    const contentItems = await waitFor(() => screen.getAllByTestId('ContentItemId'));
    
    
    expect(contentItems.length).toBeGreaterThan(0)
})
