import userLogIn from "@/libs/userLogIn";

describe('userLogIn function', () => {

  it('should successfully login with correct email and password', async () => {
    const mockResponse = { accessToken: 'mockAccessToken' };
    const mockUserEmail = 'amy@gmail.com';
    const mockUserPassword = '555555';

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await userLogIn(mockUserEmail, mockUserPassword);

    expect(fetch).toHaveBeenCalledWith(process.env.BACKEND_URL + '/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: mockUserEmail,
        password: mockUserPassword,
      }),
    });

  });
});
