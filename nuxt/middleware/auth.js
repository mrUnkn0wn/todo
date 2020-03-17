export default async function ({ store, redirect, route }) {
  await store.dispatch('auth/check');

  if (store.state.auth.authenticated) {
    route.name === 'login' && redirect('/tasks');
  } else {
    route.name === 'tasks' && redirect('/login');
  }
}