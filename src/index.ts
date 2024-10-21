// 対象のデバイス種別(WoContactは開閉センサー)
const targetDeviceType = 'WoContact';

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log('ttt');
		const url = new URL(request.url);
		console.log(url.pathname);
		// POST /hooks
		if (request.method === 'POST' && url.pathname.startsWith('/hooks')) {
			// let data: SwitchBotRequest | null = null;
			// try {
			// 	data = await request.json<SwitchBotRequest>();
			// } catch (e) {
			// 	return new Response('Invalid request', { status: 400 });
			// }
			// // 対象のデバイスかどうか判定する
			// if (data.context.deviceType !== targetDeviceType) {
			// 	return new Response('', { status: 204 });
			// }
			// Discord Webhookを送信する
			// const webhookUrl = 'https://discord.com/api/webhooks/********';
			// const resp = await fetch(webhookUrl, {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify({
			// 		username: 'SwitchBot',
			// 		content:
			// 			data.context.openState === 'open'
			// 				? 'ドアが開きました'
			// 				: data.context.openState === 'close'
			// 				? 'ドアが閉じました'
			// 				: 'ドアが開きっぱなしです',
			// 	}),
			// });
			// 結果のステータスを返す
			// return new Response(`result: ${resp.statusText}`, {
			// 	status: 200,
			// 	headers: {
			// 		'Content-Type': 'text/plain',
			// 	},
			// });
			return new Response(`result: test`, {
				status: 200,
				headers: {
					'Content-Type': 'text/plain',
				},
			});
		}
		// パスに一致しない場合はエラー
		return new Response('Method Not Allowed', { status: 405 });
	},
};
