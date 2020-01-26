<script>
  import { default as fixtures } from "@scaljeri/fbp-shared";
  export let name;
  export let data = fixtures.fixtureFbpBasic;
  console.log(data);
  setTimeout(() => {
    const el = document.querySelector('fbp-main');
    el.nodes = data.nodes;
  });
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: calc(100% - 2em);
    height: calc(100% - 2em);
  }

  fbp-main {
    display: flex;
    height: 100%;
    border: 2px solid #000;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!!!</h1>
  <!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->

  <!-- {#if data && data.nodes} -->
    <fbp-main>
      {#each data.nodes as node}
        <fbp-node id={node.id} />
      {/each}
    </fbp-main>
  <!-- {/if} -->
</main>
