if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>a(e,n),d={module:{uri:n},exports:r,require:o};s[n]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SKKBrEo40mrsSrtCbEJVl/_buildManifest.js",revision:"a23c31e36d9dc47c236ca1cdb970bf1a"},{url:"/_next/static/SKKBrEo40mrsSrtCbEJVl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1087-3cca8416a7a25448.js",revision:"3cca8416a7a25448"},{url:"/_next/static/chunks/1372-d62ffc6757741364.js",revision:"d62ffc6757741364"},{url:"/_next/static/chunks/1472-9478c5ca2aed22ce.js",revision:"9478c5ca2aed22ce"},{url:"/_next/static/chunks/1677-499591d129894e37.js",revision:"499591d129894e37"},{url:"/_next/static/chunks/1833-3d5fbf531a275785.js",revision:"3d5fbf531a275785"},{url:"/_next/static/chunks/2151-419d0f12441f76f4.js",revision:"419d0f12441f76f4"},{url:"/_next/static/chunks/2206-c392e491b8ed8422.js",revision:"c392e491b8ed8422"},{url:"/_next/static/chunks/2465-bfdd415b62a19c9b.js",revision:"bfdd415b62a19c9b"},{url:"/_next/static/chunks/2606-fbe5adf27626b719.js",revision:"fbe5adf27626b719"},{url:"/_next/static/chunks/3023-fb0b004743d556f1.js",revision:"fb0b004743d556f1"},{url:"/_next/static/chunks/3193-c281ad6d56c80e05.js",revision:"c281ad6d56c80e05"},{url:"/_next/static/chunks/3451-af8ae8c7b67fbca5.js",revision:"af8ae8c7b67fbca5"},{url:"/_next/static/chunks/3455-d22b7c6d32422252.js",revision:"d22b7c6d32422252"},{url:"/_next/static/chunks/3466-3b5cedfcdbe0c078.js",revision:"3b5cedfcdbe0c078"},{url:"/_next/static/chunks/4120.69fefbaebf9dae24.js",revision:"69fefbaebf9dae24"},{url:"/_next/static/chunks/4381-fc9aad1f74c35c1a.js",revision:"fc9aad1f74c35c1a"},{url:"/_next/static/chunks/442-2d7783333366340b.js",revision:"2d7783333366340b"},{url:"/_next/static/chunks/4762-37726cb6eb1625a1.js",revision:"37726cb6eb1625a1"},{url:"/_next/static/chunks/4769-09490b735203591f.js",revision:"09490b735203591f"},{url:"/_next/static/chunks/5275-096dd26e66744c8a.js",revision:"096dd26e66744c8a"},{url:"/_next/static/chunks/5415-3bd686054e391838.js",revision:"3bd686054e391838"},{url:"/_next/static/chunks/572-c83354e3666076cd.js",revision:"c83354e3666076cd"},{url:"/_next/static/chunks/5760-d43fef8ddea727fa.js",revision:"d43fef8ddea727fa"},{url:"/_next/static/chunks/6057-5f418694f3feb58b.js",revision:"5f418694f3feb58b"},{url:"/_next/static/chunks/6502-34bc7f6f571e3bc5.js",revision:"34bc7f6f571e3bc5"},{url:"/_next/static/chunks/6c44d60f.a783cfd4cdc25d5d.js",revision:"a783cfd4cdc25d5d"},{url:"/_next/static/chunks/7114-4afadefa44150155.js",revision:"4afadefa44150155"},{url:"/_next/static/chunks/7229.937a08e3b35741ac.js",revision:"937a08e3b35741ac"},{url:"/_next/static/chunks/7437-bfc55f74a5c0461b.js",revision:"bfc55f74a5c0461b"},{url:"/_next/static/chunks/7485-6e7e135cfc4969ff.js",revision:"6e7e135cfc4969ff"},{url:"/_next/static/chunks/7836-2609645f72e50c7f.js",revision:"2609645f72e50c7f"},{url:"/_next/static/chunks/7989-20d30b598495231d.js",revision:"20d30b598495231d"},{url:"/_next/static/chunks/8144-318c9368d2fd3dfe.js",revision:"318c9368d2fd3dfe"},{url:"/_next/static/chunks/8439-5d9725ec9e39c389.js",revision:"5d9725ec9e39c389"},{url:"/_next/static/chunks/8573-2b164ee9bdf7b45a.js",revision:"2b164ee9bdf7b45a"},{url:"/_next/static/chunks/8580-23dcefe9bbbcc532.js",revision:"23dcefe9bbbcc532"},{url:"/_next/static/chunks/896-e6c0c3870ee20b52.js",revision:"e6c0c3870ee20b52"},{url:"/_next/static/chunks/9143-153bdf6369f150d8.js",revision:"153bdf6369f150d8"},{url:"/_next/static/chunks/9260.e7548c2c330a1b59.js",revision:"e7548c2c330a1b59"},{url:"/_next/static/chunks/9527-b63f7fac8e2940f1.js",revision:"b63f7fac8e2940f1"},{url:"/_next/static/chunks/9616-54e897239af65656.js",revision:"54e897239af65656"},{url:"/_next/static/chunks/9663-be7a988deb4ac4a1.js",revision:"be7a988deb4ac4a1"},{url:"/_next/static/chunks/9669-b9d0586c444df8cc.js",revision:"b9d0586c444df8cc"},{url:"/_next/static/chunks/9755-605327e8608db44f.js",revision:"605327e8608db44f"},{url:"/_next/static/chunks/9777-ab1ee75c1b1d2bd7.js",revision:"ab1ee75c1b1d2bd7"},{url:"/_next/static/chunks/ea88be26-3668496008c72348.js",revision:"3668496008c72348"},{url:"/_next/static/chunks/framework-ce84985cd166733a.js",revision:"ce84985cd166733a"},{url:"/_next/static/chunks/main-64e57e8c1f9df4de.js",revision:"64e57e8c1f9df4de"},{url:"/_next/static/chunks/pages/404-03286cec190d4f65.js",revision:"03286cec190d4f65"},{url:"/_next/static/chunks/pages/_app-ed1189631324615a.js",revision:"ed1189631324615a"},{url:"/_next/static/chunks/pages/_error-2582ed3fce059507.js",revision:"2582ed3fce059507"},{url:"/_next/static/chunks/pages/account-30f7e43435d4d709.js",revision:"30f7e43435d4d709"},{url:"/_next/static/chunks/pages/adspy-febd236b86981a8d.js",revision:"febd236b86981a8d"},{url:"/_next/static/chunks/pages/auth/login-6daae17a4f36174f.js",revision:"6daae17a4f36174f"},{url:"/_next/static/chunks/pages/auth/register-115a02fadeff6b27.js",revision:"115a02fadeff6b27"},{url:"/_next/static/chunks/pages/auth/reset-b9f7131b0523de06.js",revision:"b9f7131b0523de06"},{url:"/_next/static/chunks/pages/brands-7a8605013b031a1d.js",revision:"7a8605013b031a1d"},{url:"/_next/static/chunks/pages/business-center-1cfff2c92863ef76.js",revision:"1cfff2c92863ef76"},{url:"/_next/static/chunks/pages/coaching/order-c70d744aea15d27d.js",revision:"c70d744aea15d27d"},{url:"/_next/static/chunks/pages/coaching/preorder-confirm-d26befbd04310ebf.js",revision:"d26befbd04310ebf"},{url:"/_next/static/chunks/pages/coaching/preorder-de4c7b08dd85a79a.js",revision:"de4c7b08dd85a79a"},{url:"/_next/static/chunks/pages/feedback-c109fa22c09106f2.js",revision:"c109fa22c09106f2"},{url:"/_next/static/chunks/pages/find-product-on-aliexpress-83192859a93c0d2f.js",revision:"83192859a93c0d2f"},{url:"/_next/static/chunks/pages/find-winning-product-c2317e15f896db35.js",revision:"c2317e15f896db35"},{url:"/_next/static/chunks/pages/how-credits-work-424fd97e0db59f4d.js",revision:"424fd97e0db59f4d"},{url:"/_next/static/chunks/pages/index-04a72ca457a3e189.js",revision:"04a72ca457a3e189"},{url:"/_next/static/chunks/pages/influencers-cfa324d80a2fb2c8.js",revision:"cfa324d80a2fb2c8"},{url:"/_next/static/chunks/pages/influencers/%5Bid%5D-bda046056d6d9327.js",revision:"bda046056d6d9327"},{url:"/_next/static/chunks/pages/lists-abc8fe1ea9ea9c42.js",revision:"abc8fe1ea9ea9c42"},{url:"/_next/static/chunks/pages/lists/%5Bid%5D-bf66b037006c9e7a.js",revision:"bf66b037006c9e7a"},{url:"/_next/static/chunks/pages/lists/public/%5Bid%5D-1395cb2721c11af0.js",revision:"1395cb2721c11af0"},{url:"/_next/static/chunks/pages/mail-validation-f806bcad1e2b8ad1.js",revision:"f806bcad1e2b8ad1"},{url:"/_next/static/chunks/pages/no-credits-cb6a518118445ef4.js",revision:"cb6a518118445ef4"},{url:"/_next/static/chunks/pages/pause-subscription-9e498a81b376a994.js",revision:"9e498a81b376a994"},{url:"/_next/static/chunks/pages/pinterest-7ffdec5335494ad5.js",revision:"7ffdec5335494ad5"},{url:"/_next/static/chunks/pages/pinterest/%5Bid%5D-46cc37a6262406b9.js",revision:"46cc37a6262406b9"},{url:"/_next/static/chunks/pages/placements-7da5b5e95a7947b4.js",revision:"7da5b5e95a7947b4"},{url:"/_next/static/chunks/pages/placements/%5Bid%5D-a2050241151397f2.js",revision:"a2050241151397f2"},{url:"/_next/static/chunks/pages/posts-6edafa9d4c53b7f6.js",revision:"6edafa9d4c53b7f6"},{url:"/_next/static/chunks/pages/posts/%5Bid%5D-b26de73b0a82545c.js",revision:"b26de73b0a82545c"},{url:"/_next/static/chunks/pages/premium-affiliate-c7df024552de1bb1.js",revision:"c7df024552de1bb1"},{url:"/_next/static/chunks/pages/pricing-c388daa033dab4cb.js",revision:"c388daa033dab4cb"},{url:"/_next/static/chunks/pages/pricing/merry-christmas-19965d680fd73cd4.js",revision:"19965d680fd73cd4"},{url:"/_next/static/chunks/pages/pricing/onboarding-cd255da4d666c458.js",revision:"cd255da4d666c458"},{url:"/_next/static/chunks/pages/pricing/we-love-brazil-35dae1e3cffacf4f.js",revision:"35dae1e3cffacf4f"},{url:"/_next/static/chunks/pages/pricing/we-love-india-074650a6156c6f28.js",revision:"074650a6156c6f28"},{url:"/_next/static/chunks/pages/pricing/we-love-maroco-28f3bc95b325b957.js",revision:"28f3bc95b325b957"},{url:"/_next/static/chunks/pages/pricing/we-love-pakistan-289d922f53657cd7.js",revision:"289d922f53657cd7"},{url:"/_next/static/chunks/pages/pricing/we-love-turkey-3104a47a756c7090.js",revision:"3104a47a756c7090"},{url:"/_next/static/chunks/pages/products-a9bc0a5d74c6df1f.js",revision:"a9bc0a5d74c6df1f"},{url:"/_next/static/chunks/pages/products/%5Bid%5D-7781e08af08fea31.js",revision:"7781e08af08fea31"},{url:"/_next/static/chunks/pages/products/redirect-6ff3789771a433ad.js",revision:"6ff3789771a433ad"},{url:"/_next/static/chunks/pages/products/success-radar-b9497ee95a165d7d.js",revision:"b9497ee95a165d7d"},{url:"/_next/static/chunks/pages/products/track-a-new-shop-6b0038e92182a1df.js",revision:"6b0038e92182a1df"},{url:"/_next/static/chunks/pages/rewards/%5Bid%5D-d5f2aab3adb7e351.js",revision:"d5f2aab3adb7e351"},{url:"/_next/static/chunks/pages/sales-tracker-2a5accb65692407b.js",revision:"2a5accb65692407b"},{url:"/_next/static/chunks/pages/sales-tracker/%5Bdomain%5D-acd0d9876d003933.js",revision:"acd0d9876d003933"},{url:"/_next/static/chunks/pages/server-sitemap.xml-f04429406f13dbf1.js",revision:"f04429406f13dbf1"},{url:"/_next/static/chunks/pages/shops-8c3a5b1510b14b34.js",revision:"8c3a5b1510b14b34"},{url:"/_next/static/chunks/pages/shops/%5Bid%5D-cbaa24c34f69e227.js",revision:"cbaa24c34f69e227"},{url:"/_next/static/chunks/pages/tiktok-808f421949b8e6d8.js",revision:"808f421949b8e6d8"},{url:"/_next/static/chunks/pages/tiktok/%5Bid%5D-5ba8cc8b8aff90a1.js",revision:"5ba8cc8b8aff90a1"},{url:"/_next/static/chunks/pages/trash/cyber-monday-d1cd7b5297316856.js",revision:"d1cd7b5297316856"},{url:"/_next/static/chunks/pages/trash/partnership-694ad13dbe3a22eb.js",revision:"694ad13dbe3a22eb"},{url:"/_next/static/chunks/pages/trash/preorder-903d89335a1e3908.js",revision:"903d89335a1e3908"},{url:"/_next/static/chunks/pages/trash/preorder-confirm-d9f26eebeab67b07.js",revision:"d9f26eebeab67b07"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ea8869cb87abcb33.js",revision:"ea8869cb87abcb33"},{url:"/_next/static/css/00839dd18f035951.css",revision:"00839dd18f035951"},{url:"/_next/static/css/0d765311014693f0.css",revision:"0d765311014693f0"},{url:"/_next/static/css/221d22c5f1d7fac2.css",revision:"221d22c5f1d7fac2"},{url:"/_next/static/css/99fac363a888d940.css",revision:"99fac363a888d940"},{url:"/_next/static/css/de7f04ae2152a8e1.css",revision:"de7f04ae2152a8e1"},{url:"/favicon-16x16.png",revision:"4f52d75cf303caae3f38010b039eeb61"},{url:"/favicon-32x32.png",revision:"f34020f57c5fbd0c17460beb7d24c6a7"},{url:"/favicon-96x96.png",revision:"6dfc0000e1bac8d3675ec107cfbed28b"},{url:"/fb/angry.png",revision:"af957e527c5900d8709d6601f65f7746"},{url:"/fb/comment.png",revision:"131469e7524afd164165aca1f34c38e4"},{url:"/fb/haha.png",revision:"d4d656bb506d9e6a39a628c2feee1c79"},{url:"/fb/like.png",revision:"d1334b283278d9eef344bdce330bb7fc"},{url:"/fb/love.png",revision:"bdbd7bc8eb6a2082df76990961e2863c"},{url:"/fb/sad.png",revision:"4ab92bd57e9301b00fcafe14854e1e0a"},{url:"/fb/share.png",revision:"eee37ae956cbdc714437740cb7f5d37a"},{url:"/fb/wow.png",revision:"c51d26008aad5fc83173f71abde1fe02"},{url:"/icons/android-icon-144x144.png",revision:"03e13e13ffded119df1f44619993fb2c"},{url:"/icons/android-icon-192x192.png",revision:"1cfb7a5d1c52be3ab5acc439b98d8e4f"},{url:"/icons/android-icon-36x36.png",revision:"3e61729431b7ec038f3cb4e55d125ea0"},{url:"/icons/android-icon-48x48.png",revision:"18ca04fc2832c45f0fbbdff216625f89"},{url:"/icons/android-icon-512x512.png",revision:"6d5dd220beb663848daf14421abc0179"},{url:"/icons/android-icon-72x72.png",revision:"dd6985ab679520629772c4b5fd78934b"},{url:"/icons/android-icon-96x96.png",revision:"04548adb6d5deedbf578a78fb3d15749"},{url:"/icons/apple-icon-114x114.png",revision:"a05cfe418dd071b5cb2e983cc1d56107"},{url:"/icons/apple-icon-120x120.png",revision:"070536a49e2ea81bd5ffd4dab084a8ec"},{url:"/icons/apple-icon-144x144.png",revision:"03e13e13ffded119df1f44619993fb2c"},{url:"/icons/apple-icon-152x152.png",revision:"7025fdfaf59b5838471d4d401917a373"},{url:"/icons/apple-icon-180x180.png",revision:"29825a6eba2a339409a5ceca3cc3bd7b"},{url:"/icons/apple-icon-57x57.png",revision:"4983a6ff28d9adb7479365ce0228651c"},{url:"/icons/apple-icon-60x60.png",revision:"e224fbb956fd8274ae9c5139d8291de5"},{url:"/icons/apple-icon-72x72.png",revision:"dd6985ab679520629772c4b5fd78934b"},{url:"/icons/apple-icon-76x76.png",revision:"72d7b87235285f0458b3969acee77427"},{url:"/icons/apple-icon-precomposed.png",revision:"f9b69643bdafe1745af7c14fa665c4af"},{url:"/icons/apple-icon.png",revision:"f9b69643bdafe1745af7c14fa665c4af"},{url:"/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/icons/maskable_icon.png",revision:"6d5dd220beb663848daf14421abc0179"},{url:"/icons/ms-icon-144x144.png",revision:"03e13e13ffded119df1f44619993fb2c"},{url:"/icons/ms-icon-150x150.png",revision:"728110f5794362449b582087cc17954a"},{url:"/icons/ms-icon-310x310.png",revision:"81c08ccec8f387cc8cf8ff503bab5078"},{url:"/icons/ms-icon-70x70.png",revision:"f6b819b8489d048a7c71f14a9c845edc"},{url:"/icons/promotions/other/baby_flat_default.svg",revision:"cf6f7dbef3c9fb4a5a138b7539e0856e"},{url:"/icons/promotions/other/older_person_flat_default.svg",revision:"741a8b483005be76b5c25fea0d16af22"},{url:"/icons/promotions/small/all_networks.svg",revision:"986c7fe7ea95a5864f9537e90f8c4a89"},{url:"/icons/promotions/small/facebook.svg",revision:"5fb769dce95f185ec5cba185439bf1e7"},{url:"/icons/promotions/small/pinterest.svg",revision:"c9a1515b3591fc389a4e6e3657dfe8cd"},{url:"/icons/promotions/small/placement.svg",revision:"a8db027112f1b7c44361a18960b05e45"},{url:"/icons/promotions/small/tiktok.svg",revision:"617ce39d2802deaa4d478c77f9185339"},{url:"/icons/promotions/square/audienceAge.svg",revision:"2942387b4506841691ab53f32229beae"},{url:"/icons/promotions/square/audienceCountry.svg",revision:"d84f18e8f09484342f3aea5ddce0a78f"},{url:"/icons/promotions/square/audienceGender.svg",revision:"e1b9b9cd0440f4bef7d0874f117e5855"},{url:"/icons/promotions/square/facebook.svg",revision:"6433d4f1240664a6f658cf436fa2dc04"},{url:"/icons/promotions/square/pinterest.svg",revision:"0e7b142501c8473e0285fed51c613386"},{url:"/icons/promotions/square/placement.svg",revision:"8191af336ec72983cc2e6f7ebdfd35ac"},{url:"/icons/promotions/square/sales.svg",revision:"d6ea7b6ba27d7a919881d8a3c43dd2b5"},{url:"/icons/promotions/square/tiktok.svg",revision:"a79dbf3c06d2e0c170d9845c914c6372"},{url:"/images/404.svg",revision:"d03741c7a4e939bbc3d7b1db7fdaa4ff"},{url:"/images/Tiktok_small.png",revision:"b55eabe92a07c07f1b6eded2b32a9ece"},{url:"/images/bp-screenshot-dark.png",revision:"0c6dd06ef16e29c27d05495af19562d9"},{url:"/images/bp_success_radar.jpg",revision:"8c281cbf7246c832578478c89ddc8f1d"},{url:"/images/business-plan.png",revision:"24c610ddf3f3e85211422faff87efb03"},{url:"/images/coaching-preview.jpg",revision:"cb78637ce12348352ba271bc09eaa0ae"},{url:"/images/community_logo.svg",revision:"2053789b51574ef2bb3be8453fe8841e"},{url:"/images/confetti.gif",revision:"c324b87fcddb6527729335c7c78235be"},{url:"/images/confetti.png",revision:"551f571657a3b15c53612f70f51caecf"},{url:"/images/crown.svg",revision:"fe60b3e32f8fa4628899a5cb663a6167"},{url:"/images/crying-snapchat.png",revision:"b275b028248a81e51358a3a5cb87698d"},{url:"/images/dropshipping.png",revision:"0771ce232996437254d4b12a3c93f675"},{url:"/images/email-validation.svg",revision:"0c3e6e4915667524284e3560e6affa05"},{url:"/images/emojies/3D/admission_tickets.png",revision:"084e7822e15f38e5d707cada8d3d19ec"},{url:"/images/emojies/3D/christmas_tree.png",revision:"d920d78bc2c71cf0812765de19074952"},{url:"/images/emojies/3D/computer_disk.png",revision:"0dfa675fa4159259c77675f10c19c82f"},{url:"/images/emojies/3D/confetti_ball.png",revision:"cd6a02024f5a4bdee603d653171505ac"},{url:"/images/emojies/3D/exploding_head.png",revision:"bacb8c5c6f4bbc2f8ab9d6ef446db627"},{url:"/images/emojies/3D/film_projector_3d.png",revision:"d2cf3bd070796fad3c2bc9f9d3800c08"},{url:"/images/emojies/3D/gem_stone.png",revision:"a777ab9c61ea5c0541b6a23e0e9bdbb3"},{url:"/images/emojies/3D/handshake_3d.png",revision:"14a437f3889e55da47d01fad0199aa02"},{url:"/images/emojies/3D/loudspeaker_3d.png",revision:"18ee6c7678a76eb27c3e89e4439cb034"},{url:"/images/emojies/3D/magnifier.png",revision:"0211476dfad76754fae49f4afb6be5a8"},{url:"/images/emojies/3D/mailbox.png",revision:"e1cb8c69f08abf6f854e369f086d943e"},{url:"/images/emojies/3D/megaphone.png",revision:"73c0b8ed4466934ba4d41dd268409090"},{url:"/images/emojies/3D/money_bag.png",revision:"e6a285cd98309c71838e760c4d2d65d8"},{url:"/images/emojies/3D/orange_heart.png",revision:"6c8d80e6f6a3541db365a7227c4007cb"},{url:"/images/emojies/3D/party_popper.png",revision:"19be7544e2e518b5b78a34f158f303e2"},{url:"/images/emojies/3D/trophy.png",revision:"6d8f77d7e8b9dd2363db34d51d7bc3fe"},{url:"/images/error.png",revision:"e4865c0ae3f2731edc483441dbb9c49f"},{url:"/images/facebook-bg.png",revision:"dd3f58a8ab527a9e42a8b8e05e77e740"},{url:"/images/facebook.svg",revision:"d6ff567fbd337427c0c7954943f52819"},{url:"/images/fakeAds.png",revision:"536813ce9e8229618a673db55fef9262"},{url:"/images/feedback.jpg",revision:"a0c008c4f32cece67c7d6a9bf3dda100"},{url:"/images/female.svg",revision:"cb4e43a832095c21a7d2726309b7140b"},{url:"/images/fidelity.gif",revision:"c64ddadca6f1fafcb31062d0832643b1"},{url:"/images/florian-tep.png",revision:"450d435fefea633bec0a276e39c8bfd2"},{url:"/images/instagram-bg.png",revision:"9b6c64608d5b6e5b1a9b99f1d2d94db7"},{url:"/images/instagram.svg",revision:"03754c3707674ac7c0db63bd6408f2e2"},{url:"/images/list-banner.png",revision:"5d8fa869f79e6734ee6d8603c4525ffe"},{url:"/images/list.png",revision:"44249dae161083f06fa51e7c7a1ada80"},{url:"/images/lock.svg",revision:"dd4990fae594ef71157dffdc877887a6"},{url:"/images/logo_minea.png",revision:"4c6f8ae7f54267d8e01dc73bc068f881"},{url:"/images/male.svg",revision:"0026f798e274a75165100cada385b638"},{url:"/images/mesh-gradient.jpg",revision:"a8e916b871c138090097623b810fde08"},{url:"/images/messenger.png",revision:"ce7846243704ad3d79139646a446cd69"},{url:"/images/minea-auth-banner-en.png",revision:"44de5ada5d5702e7c549ad7a30f47035"},{url:"/images/minea-auth-banner-fr.png",revision:"2bbcc079d53dc435896380c84e947354"},{url:"/images/minea-dark.svg",revision:"cc18477e4abf0fc1b933072991e1384f"},{url:"/images/minea-light.svg",revision:"ee728bef09396ae347f98020f65ce400"},{url:"/images/minea-system.svg",revision:"ee728bef09396ae347f98020f65ce400"},{url:"/images/minea-trouve-produits-gagnants-dropshipping-par-image-sur-aliexpress.jpg",revision:"2e8e91d1ebbf30bcfcf0ee7f249bd4a0"},{url:"/images/minea-v2.jpg",revision:"7ee267d6a3caf9bbec65b552193371fd"},{url:"/images/miner-animation.jpg",revision:"5b07787ba1f152070eb8ff69b6c3d7a1"},{url:"/images/no-screenshot-minea-en.png",revision:"f58cfdff7ec8f85093b2dd30debaef68"},{url:"/images/no-screenshot-minea-fr.png",revision:"5f54a672bdccc01d8e8668ae9660b285"},{url:"/images/pinterest-bg.png",revision:"79fe868e0fd8a6e6d2b746c7b696c24b"},{url:"/images/reward-diamond.png",revision:"71c8d512bbedf69d26d97aa177532da6"},{url:"/images/reward-gold.png",revision:"58774fa36b02bd2d64678c50c7890d9f"},{url:"/images/reward-master.png",revision:"bd671934ded7471a52e33f676c2b7801"},{url:"/images/reward-silver.png",revision:"6456f798df1eb823922d6db2ad1f4dd6"},{url:"/images/rocket-load.gif",revision:"1ba97e37b5da9f69bd478ad357966dbc"},{url:"/images/rocket.svg",revision:"541610f6121f128b8f6b81dbd85c1473"},{url:"/images/shopify-banner.svg",revision:"cfdadabcedbd1d8512ec6c516a3ac97e"},{url:"/images/shopify-icon.svg",revision:"420a7c69b1b4bff90f7b80a604078de9"},{url:"/images/shopify.png",revision:"e50ccb8737a62ad882ab1b021d3c79d1"},{url:"/images/telegram.svg",revision:"2ba89ccff2e447dab4fc53ff737fa0d5"},{url:"/images/ticket.svg",revision:"da49fb5e67404be2de9398162cf09ea3"},{url:"/images/tiktok-bg.svg",revision:"ad3bc37aad5d27e05805fd9a04e44d63"},{url:"/images/tiktok.svg",revision:"e0d970fca3e22bef8ec39ebfb08e48a2"},{url:"/images/tiktok_onboarding.png",revision:"e35bb88af6b0be8669e6b88ac81a37b3"},{url:"/images/verified.svg",revision:"657572173dc81dabe2134281243a0e46"},{url:"/json/geoMapContinents.json",revision:"672779267fe79e80c56f645e8111a60e"},{url:"/json/geoMapCountries.json",revision:"f002be69c601468299b691f7ce414874"},{url:"/locales/en/ads.json",revision:"c7da7b4d71c511fa933e740983d98164"},{url:"/locales/en/auth.json",revision:"07e82c7e4d9fdd3222edc83c63bea24e"},{url:"/locales/en/brand.json",revision:"4484505f2e589b357d407625580b1513"},{url:"/locales/en/business-center.json",revision:"803773942d314b3e72fbfcbe3a594afb"},{url:"/locales/en/business-plan.json",revision:"1a1a8c7b7c3a5e810984ef10e6c5c350"},{url:"/locales/en/coaching.json",revision:"f2ccbc7f5848ab6ce1aa589db59e34ef"},{url:"/locales/en/common.json",revision:"6e1d0f6f0af5c88885ab0e9f19b9039b"},{url:"/locales/en/dashboard.json",revision:"fb0ed7cc5ddd9c0a79364b35cb78b006"},{url:"/locales/en/influencers.json",revision:"9c3c5abcd8d1f6eba554dbaccbcd5ef1"},{url:"/locales/en/lists.json",revision:"58a74e4b4060fbfc3bec33cae3b92c2a"},{url:"/locales/en/mail-validation.json",revision:"274755e8698562dfc68b737dc2fc44a4"},{url:"/locales/en/pause-subscription.json",revision:"c1f9191d7c6655e0077cea58255ac300"},{url:"/locales/en/pins.json",revision:"4c551194b27f6c1ae76f61a3e2b3a63a"},{url:"/locales/en/placements.json",revision:"6a881b26decc790afb060a6f00bdfc87"},{url:"/locales/en/pricing.json",revision:"76346877a473c8ea88517f838d66c3a1"},{url:"/locales/en/product-aliexpress.json",revision:"512d1f36054fdd139763d3f2fcac2b23"},{url:"/locales/en/products.json",revision:"8363d86ec09b7b6fa6e33e0846a66d58"},{url:"/locales/en/shop.json",revision:"5df054bf3ea2d7ea41ca010cd4c9f3c0"},{url:"/locales/en/sort-by.json",revision:"4825681e2b22299d3b6f6cbbfcfa3c47"},{url:"/locales/en/tiktok.json",revision:"eab6027044de3e17a7386ffa9f153828"},{url:"/locales/fr/ads.json",revision:"b2deb128021388bbf34c47d76453b967"},{url:"/locales/fr/auth.json",revision:"e31ead9739827876e2e92ed4203619e1"},{url:"/locales/fr/brand.json",revision:"2642b257295c586089816c8c22ddecd4"},{url:"/locales/fr/business-center.json",revision:"2ca4bc086d7ef36fff5a759340da4cdf"},{url:"/locales/fr/business-plan.json",revision:"ffaaa50da9bf2065882c08528a6a3bf0"},{url:"/locales/fr/coaching.json",revision:"09042b164a623cefa406455fede3de11"},{url:"/locales/fr/common.json",revision:"fa6ad04003125a725c3c0c8042a0c943"},{url:"/locales/fr/dashboard.json",revision:"129aac145497c3468d5b6d0848b9ed01"},{url:"/locales/fr/influencers.json",revision:"8c05237bb63a33c891eef9f7cf5a4410"},{url:"/locales/fr/lists.json",revision:"ec0fee02adada78d733a8eb766d97588"},{url:"/locales/fr/mail-validation.json",revision:"a113040e0872a3546a2d4598db794db9"},{url:"/locales/fr/pause-subscription.json",revision:"687d44f56ed361e9b114ef73f3f40fb5"},{url:"/locales/fr/pins.json",revision:"55a1df72f442202b66edce25262fd2b4"},{url:"/locales/fr/placements.json",revision:"28c6f224bf231e6314130977f9f8f3a5"},{url:"/locales/fr/pricing.json",revision:"8c2894ce99bb5b5af37dcb78075ae320"},{url:"/locales/fr/product-aliexpress.json",revision:"d853dfad5205b2b39fe65481e5f05b8c"},{url:"/locales/fr/products.json",revision:"e932972496fa2c561e9882815bf19632"},{url:"/locales/fr/shop.json",revision:"7ae342938bda185f36fa852bc575d17c"},{url:"/locales/fr/sort-by.json",revision:"8c69fb3f8521281527fcbc603b2c605e"},{url:"/locales/fr/tiktok.json",revision:"702326b328c303f0e3a8553c0eea48f8"},{url:"/locales/pt/ads.json",revision:"8d3f88e26f7ee20030a786b78decf3f6"},{url:"/locales/pt/auth.json",revision:"1fec1214a6bdf1ced2044a3d91062d92"},{url:"/locales/pt/brand.json",revision:"e313713aa0ae613a0dc87a468e9b8e3e"},{url:"/locales/pt/business-center.json",revision:"48a49b748b2b96a406ba3dcaee3dff21"},{url:"/locales/pt/business-plan.json",revision:"c1eaf227527728aceefde49039a3fdfb"},{url:"/locales/pt/coaching.json",revision:"09042b164a623cefa406455fede3de11"},{url:"/locales/pt/common.json",revision:"aa840d9723704ca4c925bf5e4fc7c75f"},{url:"/locales/pt/dashboard.json",revision:"bee82446585f8fa6e38f472f8d6e5f90"},{url:"/locales/pt/influencers.json",revision:"daf36e3bf89a96b2db4a7485cf4165cb"},{url:"/locales/pt/lists.json",revision:"961bf2a1af9143db7e99a66a2da753cb"},{url:"/locales/pt/mail-validation.json",revision:"019ae64f672a8459aa4129b6af5c4ed6"},{url:"/locales/pt/pause-subscription.json",revision:"9293f026fa228bab1605c16e73679df6"},{url:"/locales/pt/pins.json",revision:"a9d6ce7c70676f698d17189f94599477"},{url:"/locales/pt/placements.json",revision:"3e3266f12e6aaca6f46e5e4b5cb0743c"},{url:"/locales/pt/pricing.json",revision:"8cd33fad11379a51f94c31f33552b342"},{url:"/locales/pt/product-aliexpress.json",revision:"c42bd94154c3977788f92578b9e90243"},{url:"/locales/pt/products.json",revision:"2807cb780c19c01b21e1551197dbbb11"},{url:"/locales/pt/shop.json",revision:"d73745afea7570a0a1bb5328f3d3e83b"},{url:"/locales/pt/sort-by.json",revision:"40570af4b05f8f41e30bb9a9567bcab8"},{url:"/locales/pt/tiktok.json",revision:"22eeaf479a832bcf4d059862edca6615"},{url:"/lottie/article.json",revision:"7aa97258ea1e33b204d22d8b0e8aeefc"},{url:"/lottie/article_old.json",revision:"5d18964d91fec40931e90c2adcd4c7b2"},{url:"/lottie/black-friday.json",revision:"d377364599df9541c4b33a75cab1d031"},{url:"/lottie/error-404.json",revision:"4a61d51cbb1148f2b3a8a3cbbb027f63"},{url:"/lottie/extension.json",revision:"5bf1a55535b184ac51e8441a65c82ba4"},{url:"/lottie/eye-of-ecom.json",revision:"ca61f395a0e0d2277b5988ffcc0efcc1"},{url:"/lottie/hearts.json",revision:"2be0028e793c325de4c192ffe64f0d31"},{url:"/lottie/list.json",revision:"5df919171dc21e1f37c29ba3d0cf16f6"},{url:"/lottie/loading.json",revision:"aaba16a79134256ff003e81d247da35b"},{url:"/lottie/minea-loader.json",revision:"04acf0c793f878218448b611a4777a0f"},{url:"/lottie/radar.json",revision:"730c885d1793f000ef28bb177250c46c"},{url:"/lottie/rocket.json",revision:"c3739a950f8830c65c1179f1b298a3f0"},{url:"/lottie/searching.json",revision:"3bcc211a907046513ab0826da8132172"},{url:"/lottie/shopify-notif-phone.json",revision:"d1689ea42c033df1e5fe6707e1a8bef7"},{url:"/lottie/stone.json",revision:"94af9bb7a98ab3ab648164e1d651db3d"},{url:"/lottie/user-profile.json",revision:"c214f210998a30753846705af474d64f"},{url:"/lottie/welcome.json",revision:"d7dfbc60fbdfbd16066311391d7707b8"},{url:"/manifest.json",revision:"9fd9d641154c564921bda23395bf5636"},{url:"/robots.txt",revision:"fe265ef7904da7a537528d0515efb33a"},{url:"/sitemap.xml",revision:"e9099bcbd1425946cc3ba3ba6df1d0e9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
