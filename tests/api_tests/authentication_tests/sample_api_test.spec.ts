import { test, expect, request } from '@playwright/test';

test('CRUD API Test @regression @api', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://api.company.com'
  });

  // LOGIN
  const loginRes = await apiContext.post('/login', {
    data: {
      username: 'admin',
      password: 'pass123'
    }
  });

  const loginBody = await loginRes.json();
  const token = loginBody.token;

  // CREATE
  const createRes = await apiContext.post('/employees', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      name: 'Deepak',
      role: 'QA Lead'
    }
  });

  expect(createRes.status()).toBe(201);

  const createdUser = await createRes.json();
  const empId = createdUser.id;

  // READ
  const getRes = await apiContext.get(`/employees/${empId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(getRes.status()).toBe(200);

  // UPDATE
  const updateRes = await apiContext.put(`/employees/${empId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      role: 'Automation Lead'
    }
  });

  expect(updateRes.status()).toBe(200);

  // DELETE
  const deleteRes = await apiContext.delete(`/employees/${empId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(deleteRes.status()).toBe(204);

});