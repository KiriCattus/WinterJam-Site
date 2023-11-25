<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';

	const hostname = $page.url.hostname;
	const baseUrl = $page.url.origin;

	export let title: string;
	export let description: string | undefined = undefined;

	const canonicalUrl = new URL('https://winterjam.tophatcat.dev');

	const currentPageUrl: string = new URL($page.url.pathname, canonicalUrl).toString();
	description = description || 'An annual event in celebration of the chilly winter season!';

	const imageUrl = new URL("/images/log.webp", baseUrl);
	const imageAlt = "WinterJam Logo";
	const imageSize = { width: 512, height: 512 };

	const formattedTitle = `${title} - ${hostname}`;
</script>

<MetaTags
	{title}
	titleTemplate={`%s - ${hostname}`}
	{description}
	canonical={currentPageUrl}
    twitter={{
        cardType: "summary_large_image",
        title: formattedTitle,
        description: description,
        image: imageUrl.toString(),
        imageAlt: imageAlt,
    }}
	openGraph={{
		url: currentPageUrl,
		title: formattedTitle,
		description: description,
		images: [
			{
				url: imageUrl.toString(),
				width: imageSize.width,
				height: imageSize.height,
				alt: imageAlt
			}
		],
		siteName: hostname
	}}
    additionalMetaTags={[
        {
            name: 'theme-color',
            content: '#c1d8f5'
        }
    ]}
/>
