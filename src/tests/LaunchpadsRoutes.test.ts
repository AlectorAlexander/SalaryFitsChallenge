import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Launchpad from '../database/models/LaunchpadsModels';

describe('Launchpad Routes', () => {
  let axiosInstance: AxiosInstance;

  beforeAll(() => {
    axiosInstance = axios.create({
      baseURL: 'http://localhost:3001', // Substitua pela URL correta do seu servidor Express
    });
  });

  it('GET /launchpads should return all launchpads', async () => {
    const response: AxiosResponse<Launchpad[]> = await axiosInstance.get('/launchpads');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0); // Verifica se a matriz não está vazia

    // Verifica se cada elemento da matriz é do tipo Launchpad
    response.data.forEach((launchpad) => {
      expect(launchpad).toHaveProperty('id');
      expect(launchpad).toHaveProperty('name');
      expect(launchpad).toHaveProperty('locality');
      expect(launchpad).toHaveProperty('region');
    });
  });

  it('GET /launchpads/name/:name should return launchpads by name', async () => {
    const response: AxiosResponse<Launchpad[]> = await axiosInstance.get('/launchpads/name/VAFB');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se a chave 'name' de cada launchpad corresponde ao nome fornecido
    response.data.forEach((launchpad) => {
      expect(launchpad.name).toContain('VAFB');
    });
  });

  it('GET /launchpads/locality/:locality should return launchpads by locality', async () => {
    const response: AxiosResponse<Launchpad[]> = await axiosInstance.get('/launchpads/locality/Florida');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se a chave 'locality' de cada launchpad corresponde à localidade fornecida
    response.data.forEach((launchpad) => {
      expect(launchpad.locality).toBe('Florida');
    });
  });

  it('GET /launchpads/region/:region should return launchpads by region', async () => {
    const response: AxiosResponse<Launchpad[]> = await axiosInstance.get('/launchpads/region/USA');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se a chave 'region' de cada launchpad corresponde à região fornecida
    response.data.forEach((launchpad) => {
      expect(launchpad.region).toBe('USA');
    });
  });

  it('GET /launchpads/:id should return a specific launchpad', async () => {
    const response: AxiosResponse<Launchpad> = await axiosInstance.get('/launchpads/5e9e4501f509094ba4566f84');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('name');
    expect(response.data).toHaveProperty('locality');
    expect(response.data).toHaveProperty('region');
  });
});
