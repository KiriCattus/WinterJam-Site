<script lang="ts">
	import Particles from 'svelte-particles';
	import type { Engine, ISourceOptions } from 'tsparticles-engine';
	import { loadSlim } from 'tsparticles-slim';

	import classNames from 'classnames';

	let className = '';
	export { className as class };

	export let animate = true;

	export let particlesConfig: ISourceOptions = {
		fullScreen: {
			enable: true,
			zIndex: -5
		},
		fpsLimit: 60,
		particles: {
			links: {
				color: {
					value: '#ffffff'
				},
				distance: 500,
				opacity: 0.4,
				width: 2
			},
			move: animate
				? {
						attract: {
							rotate: {
								x: 600,
								y: 1200
							}
						},
						direction: 'bottom',
						enable: true,
						outModes: {
							bottom: 'out',
							left: 'out',
							right: 'out',
							top: 'out',
							default: 'out'
						}
				  }
				: {},
			number: {
				density: {
					enable: true
				},
				value: 400
			},
			opacity: {
				random: {
					enable: true,
					minimumValue: 0.2
				},
				value: {
					min: 0.05,
					max: 0.6
				},
				animation: {
					speed: 1,
					minimumValue: 0.1
				}
			},
			size: {
				random: {
					enable: true,
					minimumValue: 0.1
				},
				value: {
					min: 1,
					max: 10
				},
				animation: {
					speed: 40,
					minimumValue: 0.1
				}
			}
		}
	};

	let particlesInit = async (engine: Engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		//await loadFull(engine);
		await loadSlim(engine);
	};
</script>
<Particles class={classNames("inset-0 bg-black bg-opacity-20", className)} options={particlesConfig} {particlesInit} />
