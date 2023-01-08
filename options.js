const againOptions = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: 'Играть еще раз', callback_data: '/again'}],
		]
		
	})
};

const gameOptions = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
			[{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
			[{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}],
			[{text: '10', callback_data: '10'}],
		]
		
	})
};

const menuOptions = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: 'Информация о нас', callback_data: '/info'}, {text: 'Проверить производителя', callback_data: '/producer'}],
			[{text: 'Найти трубу', callback_data: '4'}, {text: 'Проверить сертификат', callback_data: '5'}],
			
		]
})};

const producersOptions = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: 'ООО Хайзенберг', callback_data: '/norm_pipe'}, {text: 'ООО ПраймПласт', callback_data: '/norm_pipe'}],
			[{text: 'ООО Полимер Лимитед', callback_data: '/norm_pipe'}, {text: 'ООО Газпласт', callback_data: '/norm_pipe'}],
			
		]
})};

const finalOptions = {
	reply_markup: JSON.stringify({
		inline_keyboard: [
			[{text: 'Дальнейшие подробности', callback_data: '0'}, {text: 'Меню', callback_data: '/menu'}],
			
			
		]
})

}



export { againOptions, gameOptions, menuOptions, producersOptions, finalOptions };