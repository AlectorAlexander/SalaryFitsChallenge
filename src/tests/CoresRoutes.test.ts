import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Cores from '../database/models/CoresModels';

describe('Cores Routes', () => {
  let axiosInstance: AxiosInstance;

  beforeAll(() => {
    axiosInstance = axios.create({
      baseURL: 'http://localhost:3001', // Substitua pela URL correta do seu servidor Express
    });
  });

  it('GET /cores should return all cores', async () => {
    const response: AxiosResponse<Cores[]> = await axiosInstance.get('/cores');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0); // Verifica se a matriz não está vazia

    // Verifica se cada elemento da matriz é do tipo Core
    response.data.forEach((core) => {
      expect(core).toHaveProperty('id');
      expect(core).toHaveProperty('reuse_count');
    });
  });

  it('GET /cores/:id should return a specific core', async () => {
    const response: AxiosResponse<Cores> = await axiosInstance.get('/cores/5e9e289df35918033d3b2623');

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', '5e9e289df35918033d3b2623');
    expect(response.data).toHaveProperty('reuse_count');
  });

  it('GET /cores/launchesAttemptsByRtls should return launches sorted by rtls_landings', async () => {
    const response: AxiosResponse<Cores[]> = await axiosInstance.get('/cores/launchesAttemptsByRtls');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se os lançamentos estão ordenados em ordem decrescente de rtls_landings
    const rtlsLandings = response.data.map((core) => core.rtls_landings);
    const sortedRtlsLandings = [...rtlsLandings].sort((a, b) => b - a);

    expect(rtlsLandings).toEqual(sortedRtlsLandings);
  });

  it('GET /cores/launchesAttemptsByAsds should return launches sorted by asds_attempts', async () => {
    const response: AxiosResponse<Cores[]> = await axiosInstance.get('/cores/launchesAttemptsByAsds');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se os lançamentos estão ordenados em ordem decrescente de asds_attempts
    const asdsAttempts = response.data.map((launch) => launch.asds_attempts);
    const sortedAsdsAttempts = [...asdsAttempts].sort((a, b) => b - a);

    expect(asdsAttempts).toEqual(sortedAsdsAttempts);
  });

  it('GET /cores/launchesLandingsByAsds should return launches sorted by asds_landings', async () => {
    const response: AxiosResponse<Cores[]> = await axiosInstance.get('/cores/launchesLandingsByAsds');

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    // Verifica se os lançamentos estão ordenados em ordem decrescente de asds_landings
    const asdsLandings = response.data.map((launch) => launch.asds_landings);
    const sortedAsdsLandings = [...asdsLandings].sort((a, b) => b - a);

    expect(asdsLandings).toEqual(sortedAsdsLandings);
  });
});
