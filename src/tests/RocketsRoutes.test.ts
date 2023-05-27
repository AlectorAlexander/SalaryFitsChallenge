import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Rocket from '../database/models/RocketsModels';

describe('Rocket Routes', () => {
  let axiosInstance: AxiosInstance;

  beforeAll(() => {
    axiosInstance = axios.create({
      baseURL: 'http://localhost:3001', // Substitua pela URL correta do seu servidor Express
    });
  });

  it('GET /rockets should return all rockets', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0); // Verifica se a matriz não está vazia

    // Verifica se cada elemento da matriz é do tipo Rocket
  });

  it('GET /rockets/:id should return a specific rocket', async () => {
    const response: AxiosResponse<Rocket> = await axiosInstance.get('/rockets/5e9d0d95eda69955f709d1eb');

    expect(response.status).toBe(200);
  });

  it('GET /rockets/name/:name should return rockets by name', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/name/Falcon');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /rockets/company/:company should return rockets by company', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/company/Space');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /rockets/country/:country should return rockets by country', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/country/Republic%20of%20the%20Marshall%20Islands');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /rockets/launches/success should return rockets with successful launches', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/launches/success');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /rockets/launches/failed should return rockets with failed launches', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/launches/failed');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /rockets/launches/pending should return the next rocket to be launched', async () => {
    const response: AxiosResponse<Rocket> = await axiosInstance.get('/rockets/launches/pending');
  
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });
  

  it('GET /rockets/active should return active rockets', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/search/active');
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  
    response.data.forEach((rocket) => {
      expect(rocket.active).toBe(true);
    });
  });
  

  it('GET /rockets/falcon should return Falcon rockets', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/search/falcon');
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  
    response.data.forEach((rocket) => {
      expect(rocket.name.toLowerCase()).toContain('falcon');
    });
  });
  

  it('GET /rockets/high-success-rate should return rockets with high success rate', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/search/high-success-rate');
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  
    response.data.forEach((rocket) => {
      expect(rocket.success_rate_pct).toBeGreaterThanOrEqual(90);
    });
  });
  

  it('GET /rockets/images should return rockets with images', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/search/images');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /rockets/launched-after-date should return rockets launched after a specific date', async () => {
    const response: AxiosResponse<Rocket[]> = await axiosInstance.get('/rockets/search/date/2023-01-01');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
});
