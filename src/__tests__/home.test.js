import { render, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Products from '@/app/page'
import axios from 'axios'
import { produts } from "@/mocks/products"
import { fetchProducts } from "@/services/fetchProducts"

jest.mock('axios');
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const queryClient = new QueryClient()

describe('Test da tela de Products', () => {

  test('Verifica se está sendo renderizado o input de filtragem e o checkbox', () => {
    
    render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    )

    const input = screen.getByPlaceholderText('Digite o nome do produto')
    const checkbox = screen.getByRole('checkbox', { name: /audio/i });

    expect(input).toBeInTheDocument()    
    expect(checkbox).toBeInTheDocument()   
  })

    test("deve retornar uma lista de produtos quando a API responder corretamente", async () => {
      const mockResponse = {
        data: {
          products: [
            ...produts,
          ],
        },
      };
  
      axios.get.mockResolvedValue(mockResponse);
  
      const products = await fetchProducts();     
      expect(products).toHaveLength(4);
      expect(products[0].title).toBe("Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)");  
  });

  test("deve renderizar a lista de produtos na tela", async () => {
    const mockResponse = {
      data: {
        products: [...produts],
      },
    };
  
    axios.get.mockResolvedValue(mockResponse);
  
    render(
      <QueryClientProvider client={queryClient}>
        <Products />
      </QueryClientProvider>
    );
    
    const productItems = await screen.findAllByTestId("product-item");
  
    expect(productItems).toHaveLength(produts.length);
  });
  
  

}
)


