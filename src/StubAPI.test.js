import React from 'react';
import { rest } from 'msw';
import {setupServer} from 'msw/node';
import {render, waitFor,screen, fireEvent} from '@testing-library/react';

import StubAPI from './StubAPI';

const data = {
  cars: [
    {
      manufacturer: "Porsche",
      model: "911 GT2 RS",
      image:
        "https://media.autoexpress.co.uk/image/private/s--CQ_dCY8e--/v1563182800/autoexpress/2019/01/01_23.jpg",
    },
  ],
};

const carDetails = {
    details: {
        horsepower: 690,
        timeTo60: 2.6,
        price: '620,000'
    }
}

const server = setupServer(
    rest.get('/cars', (req, res, ctx) => {
        return res(ctx.json(data));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('loads and displays cars', async ()=> {
    render(<StubAPI />);
    await waitFor(() => screen.getByRole('img'));

    expect(screen.getByRole('heading')).toHaveTextContent('Porsche 911 GT2 RS');
})

test('gets car details by clicking on car', async () => {
    render(<StubAPI />);
    await waitFor(() => screen.getByRole('img'));
    
    server.use(
        rest.get('/details', (req, res, ctx) => {
            return res(ctx.json(carDetails));
            })
    )
   fireEvent.click(screen.getByText("Porsche 911 GT2 RS"));

   await waitFor(() => screen.getByText('690 BHP'));()
   expect(screen.getByText('Price: $620,000')).toBeInTheDocument();
})