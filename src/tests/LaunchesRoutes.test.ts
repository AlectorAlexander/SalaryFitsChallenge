import axios, { AxiosInstance, AxiosResponse } from 'axios';
import app from '../app';
import Launch from '../database/models/LaunchsModels';

describe('Launch Routes', () => {
  let axiosInstance: AxiosInstance;

  beforeAll(() => {
    axiosInstance = axios.create({
      baseURL: 'http://localhost:3001', // Substitua pela URL correta do seu servidor Express
    });
  });

  it('GET /launches should return all launches', async () => {
    const response: AxiosResponse<Launch[]> = await axiosInstance.get('/launches');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0); // Verifica se a matriz não está vazia

    // Verifica se cada elemento da matriz é do tipo Launch
  });

  it('GET /launches/:id should return a specific launch', async () => {
    const response: AxiosResponse<Launch> = await axiosInstance.get('/launches/5eb87cd9ffd86e000604b32a');
  
    expect(response.status).toBe(200);
  });
  

  it('GET /launches/success should return successful launches', async () => {
    const response: AxiosResponse<Launch[]> = await axiosInstance.get('/launches/flightconference/success');
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  
    // Verifica se a chave 'success' de cada lançamento é verdadeira
    response.data.forEach((launch) => {
      expect(launch.success).toBe(true);
    });
  });
  
  it('GET /launches/failure should return failed launches', async () => {
    const response: AxiosResponse<Launch[]> = await axiosInstance.get('/launches/flightconference/failure');
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  
    // Verifica se a chave 'success' de cada lançamento é falsa
    response.data.forEach((launch) => {
      expect(launch.success).toBe(false);
    });
  });
  

  it('GET /launches/capsule/:id should return launches by capsule ID', async () => {
    const response: AxiosResponse = await axiosInstance.get('/launches/capsule/5e9e2c5bf35918ed873b2664'); 

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /launches/payload/:id should return launches by payload ID', async () => {
    const response: AxiosResponse = await axiosInstance.get('/launches/payload/5eb0e4b5b6c3bb0006eeb1e1');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /launches/rocket/:id should return launches by rocket ID', async () => {
    const response: AxiosResponse = await axiosInstance.get('/launches/rocket/5e9d0d95eda69973a809d1ec'); // Substitua pelo ID válido

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /launches/launchpad/:id should return launches by launchpad ID', async () => {
    const response: AxiosResponse = await axiosInstance.get('/launches/launchpad/5e9e4502f5090995de566f86'); // Substitua pelo ID válido

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('GET /launches/launchpad/name/:name should return launches by launchpad name', async () => {
    const response: AxiosResponse<Launch[]> = await axiosInstance.get('/launches/launchpad/name/VAFB');
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  

    // A launchpad VAFB SLC 3W possui o ID declarado abaixo, sendo assim, verificamos se algum lançamento do VAFB SLC 3W foi encontrado.
    const launchpadIdToFind = "5e9e4502f509092b78566f87";
  
    const launchpadFound = response.data.some((launch) => {
      return launch.launchpad === launchpadIdToFind;
    });
  
    expect(launchpadFound).toBe(true);
  });
  

  it('GET /launches/core/:id should return launches by core ID', async () => {
    const response: AxiosResponse = await axiosInstance.get('/launches/core/5e9e289df35918033d3b2623');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('POST /launches/time should return launches within a time period', async () => {
    const response: AxiosResponse = await axiosInstance.post('/launches/time', {
      start_date: '2012',
      end_date: '2019',
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
});
