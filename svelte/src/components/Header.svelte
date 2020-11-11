<script>
  import { goto } from '@sapper/app'
  import AuthService from '../services/auth';
  import { isAuthenticated } from '../stores/auth';

  export let segment;

  let isAuthenticated_value = false;

  isAuthenticated.subscribe((value) => {
    isAuthenticated_value = value;
  })

  async function logout () {
    await AuthService.logout();
    isAuthenticated.update(() => (false));
    goto('login');
  }
</script>

<style>
  .header {
      height: 80px;
      background-color: #6987C9;
  }

  .header__main {
      padding: 10px 0;
      position: relative;
  }

  .header__title {
      color: #E8ECF4;
      text-align: center;
      font-size: 60px;
      text-transform: uppercase;
      letter-spacing: 15px;
      font-weight: 100;
  }

  .header__logout {
      position: absolute;
      top: 0;
      right: 0;
      width: 60px;
      height: 100%;
      cursor: pointer;
      background: url('/img/exit.png') no-repeat center center;
  }
</style>
{#if segment}
  <div class="header">
    <div class="header__main">
        <div class="header__title">todos</div>
        {#if isAuthenticated_value}
          <div class="header__logout" on:click={logout}></div>
        {/if}
    </div>
  </div>
{/if}