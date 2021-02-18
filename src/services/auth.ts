interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'kasdhasjdhasjldhasdjasdasdkldasmkm',
        user: {
          name: 'Lucas Viga',
          email: 'lucas@vigads.com.br',
        },
      });
    }, 2000);
  });
}
