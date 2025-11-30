<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { onMount } from 'svelte';
	import type { Container, Engine, ISourceOptions } from '@tsparticles/engine';
	import { tsParticles } from '@tsparticles/engine';

	let initialized = $state(false);

	let { options = {}, url = '', id = 'tsparticles', particlesInit, particlesLoaded, ...rest }: {
		options?: ISourceOptions;
		url?: string;
		particlesInit: (engine: Engine) => Promise<void>;
		particlesLoaded?: (args?: { particles?: Container | undefined }) => void;
	} & SvelteHTMLElements['div'] = $props();

	let oldId = id;

	function destroyOldContainer() {
		if (oldId) {
			const oldContainer = tsParticles.dom().find((c) => c.id.toString() === oldId);

			if (oldContainer) {
				oldContainer.destroy();
			}
		}
	}

	onMount(() => {
		tsParticles.init();
		particlesInit(tsParticles).then(() => {
			console.log('tsParticles initialized');
			initialized = true;
		});
	});

	async function loadParticles(): Promise<void> {
		destroyOldContainer();

		if (!initialized) {
			return;
		}

		if (id) {
			const cb = (container?: Container) => {
                particlesLoaded?.({
                    particles: container
                });

				oldId = id;
			};

			const container = await tsParticles.load({
				id,
				options,
				url
			});

			cb(container);
		} else {
			particlesLoaded?.({ particles: undefined });
		}
	}

	$effect(() => {
		loadParticles();

		return destroyOldContainer;
	});
</script>

<div {id} {...rest}></div>