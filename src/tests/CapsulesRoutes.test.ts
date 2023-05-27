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
    expect(response.data.length).toBeGreaterThan(0); 
  });

  it('GET /capsules/pickup should return capsules by times used in descending order', async () => {
    const response: AxiosResponse<Capsule[]> = await axiosInstance.get('/capsules/pickup');
  
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  
    const capsules = response.data;
  
    expect(capsules.length).toBeGreaterThan(0);
  
    for (let i = 0; i < capsules.length - 1; i++) {
      const currentCapsule = capsules[i];
      const nextCapsule = capsules[i + 1];
  
      expect(currentCapsule).toHaveProperty('reuse_count');
      expect(nextCapsule).toHaveProperty('reuse_count');
  
      const currentReuseCount = currentCapsule.reuse_count;
      const nextReuseCount = nextCapsule.reuse_count;
  
      expect(currentReuseCount).toBeGreaterThanOrEqual(nextReuseCount);
    }
  });
  

  it('GET /capsules/:id should return a specific capsule', async () => {
    const response: AxiosResponse<Capsule> = await axiosInstance.get('/capsules/5e9e2c5bf35918ed873b2664');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', '5e9e2c5bf35918ed873b2664');
  });
});
