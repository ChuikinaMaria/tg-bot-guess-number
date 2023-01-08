import telegramApi from 'node-telegram-bot-api';
import { againOptions, gameOptions } from './options.js'

const TOKEN = "5912526152:AAESRt0pwaePlx6MGxVz6FbzDu-fSblPd4o";

const bot = new telegramApi(TOKEN, {polling: true});
const chats = {};



const startGame = async (chatId) => {
		await bot.sendMessage(chatId, 'Я загадаю число от 1 до 10, а ты отгадай');
		const randomNumber = Math.floor(Math.random() * 10);
		chats[chatId] = randomNumber;
		await bot.sendMessage(chatId, 'Готово, отгадывай', gameOptions);
}

const start = () => {
	bot.setMyCommands([
	{command: '/start', description: 'Начало работы'},
	{command: '/info', description: 'Информация о пользователе'},
	{command: '/pipe', description: 'Выбор трубы'},
	{command: '/game', description: 'Угадай число'},
])

bot.on('message', async msg => {
	const text = msg.text;
	const chatId = msg.chat.id;

	if (text === '/start') {
		await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/696/e1b/696e1b6e-e260-48a7-adb8-703594a613d0/11.webp')
		return bot.sendMessage(chatId, `Добро пожаловать в телеграм бот Ассоциации Производителей Труб`);
	};

	if (text === '/info') {
		return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`)
	};

	if (text === '/pipe') {
		return bot.sendMessage(chatId, 'Сейчас я помогу тебе выбрать хорошего производителя трубы');
	}
	if (text === '/game') {
		return startGame(chatId);		
	}

	return bot.sendMessage(chatId, 'Я тебя не понял')


	
	
})

bot.on('callback_query', async msg => {
	const data = msg.data;
	const chatId = msg.message.chat.id;
	if (data === '/again') {
		return startGame(chatId);
	};

	if (data == chats[chatId]) {
		await bot.sendSticker(chatId, "https://tlgrm.eu/_/stickers/571/59b/57159b97-c35e-4d71-ae4b-a36aeb51166a/192/3.webp")
		return bot.sendMessage(chatId, "Ты угадал!!!", againOptions)
	} else {
		return bot.sendMessage(chatId, `Неть, бот загадал ${chats[chatId]}`, againOptions)

	}
} )
}

start();