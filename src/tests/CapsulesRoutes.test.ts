import axios, { AxiosInstance, AxiosResponse } from 'axios';
import app from '../app';
import Capsule from '../database/models/CapsulesModels';

describe('Capsules Routes', () => {
  let axiosInstance: AxiosInstance;

  beforeAll(() => {
    axiosInstance = axios.create({
      baseURL: 'http://localhost:3001', // Substitua pela URL correta do seu servidor Express
    });
  });

  it('GET /capsules should return all capsules', async () => {
    const response: AxiosResponse<Capsule[]> = await axiosInstance.get('/capsules');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0); // Verifica se a matriz não está vazia

    // Verifica se cada elemento da matriz é do tipo Capsule
  });

  it('GET /capsules/pickup should return capsules by times used', async () => {
    const response: AxiosResponse<Capsule> = await axiosInstance.get('/capsules/pickup');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('reuse_count');
  });

  it('GET /capsules/:id should return a specific capsule', async () => {
    const response: AxiosResponse<Capsule> = await axiosInstance.get('/capsules/5e9e2c5bf35918ed873b2664');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', '5e9e2c5bf35918ed873b2664');
  });
});
