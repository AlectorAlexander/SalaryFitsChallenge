import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Payload from '../database/models/PayloadsModels';

describe('Payload Routes', () => {
  let axiosInstance: AxiosInstance;

  beforeAll(() => {
    axiosInstance = axios.create({
      baseURL: 'http://localhost:3001', // Substitua pela URL correta do seu servidor Express
    });
  });

  it('GET /payloads should return all payloads', async () => {
    const response: AxiosResponse<Payload[]> = await axiosInstance.get('/payloads');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0); // Verifica se a matriz não está vazia

    // Verifica se cada elemento da matriz é do tipo Payload
  });

  it('GET /payloads/name/:name should return payloads by name', async () => {
    const payloadName = 'PayloadName'; // Substitua pelo nome válido

    const response: AxiosResponse<Payload[]> = await axiosInstance.get(`/payloads/name/${payloadName}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se a chave 'name' de cada payload corresponde ao nome esperado
    response.data.forEach((payload) => {
      expect(payload.name).toBe(payloadName);
    });
  });

  it('GET /payloads/type/:type should return payloads by type', async () => {
    const payloadType = 'PayloadType'; // Substitua pelo tipo válido

    const response: AxiosResponse<Payload[]> = await axiosInstance.get(`/payloads/type/${payloadType}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se a chave 'type' de cada payload corresponde ao tipo esperado
    response.data.forEach((payload) => {
      expect(payload.type).toBe(payloadType);
    });
  });
  

  it('GET /payloads/:id should return a specific payload', async () => {
    const payloadId = '5eb0e4b5b6c3bb0006eeb1e1'; // Substitua pelo ID válido

    const response: AxiosResponse<Payload> = await axiosInstance.get(`/payloads/${payloadId}`);

    expect(response.status).toBe(200);
  });
});
