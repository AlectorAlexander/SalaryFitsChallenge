import request from 'supertest';
import { describe, test } from '@jest/globals';
const app = require('../app');


describe('Launch Routes', () => {
  test('GET /launches should return all launches', async () => {
    const response = await request(app).get('/launches')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/:id should return a specific launch', async () => {
    const response = await request(app).get('/launches/123') // Substitua pelo ID válido

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('launch')
  })

  test('GET /launches/success should return successful launches', async () => {
    const response = await request(app).get('/launches/success')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/failure should return failed launches', async () => {
    const response = await request(app).get('/launches/failure')

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/capsule/:id should return launches by capsule ID', async () => {
    const response = await request(app).get('/launches/capsule/456') // Substitua pelo ID válido

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/payload/:id should return launches by payload ID', async () => {
    const response = await request(app).get('/launches/payload/789') // Substitua pelo ID válido

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/rocket/:id should return launches by rocket ID', async () => {
    const response = await request(app).get('/launches/rocket/123') // Substitua pelo ID válido

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/launchpad/:id should return launches by launchpad ID', async () => {
    const response = await request(app).get('/launches/launchpad/456') // Substitua pelo ID válido

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/launchpad/name/:name should return launches by launchpad name', async () => {
    const response = await request(app).get('/launches/launchpad/name/example') // Substitua pelo nome válido

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('GET /launches/core/:id should return launches by core ID', async () => {
    const response = await request(app).get('/launches/core/123') // Substitua pelo ID válido

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })

  test('POST /launches/time should return launches within a time period', async () => {
    const response = await request(app).post('/launches/time')
      .send({
        startTime: '2012-01-01',
        endTime: '2019-12-31'
      })

    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
  })
})
