import telegramApi from 'node-telegram-bot-api';
import { againOptions, gameOptions, menuOptions, producersOptions, finalOptions } from './options.js'

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
	{command: '/info', description: 'Информация об ассоциации'},
	{command: '/pipe', description: 'Выбор трубы'},
	{command: '/game', description: 'Угадай число'},
])

bot.on('message', async msg => {
	const text = msg.text;
	const chatId = msg.chat.id;

	if (text === '/start') {
		await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/696/e1b/696e1b6e-e260-48a7-adb8-703594a613d0/11.webp')
		return bot.sendMessage(chatId, `${msg.from.first_name}, добро пожаловать в телеграм бот Ассоциации Производителей Труб`, menuOptions);
	};

	if (text === '/info') {
		return bot.sendMessage(chatId, `Ассоциация производителей труб зарегистрирована 26 февраля 2004 года и создана в целях регулирования производственной, научной и общественной деятельности, а также представления и защиты общих имущественных интересов своих членов.`)
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
	
	if (data === '/info') {
		return bot.sendMessage(chatId, `Ассоциация производителей труб зарегистрирована 26 февраля 2004 года и создана в целях регулирования производственной, научной и общественной деятельности, а также представления и защиты общих имущественных интересов своих членов.`, menuOptions)
	};

	if (data === '/producer') {
		return bot.sendMessage(chatId, "Доступна информация о следующих производителях:", producersOptions)
	};

	if (data === '/norm_pipe') {
		return bot.sendMessage(chatId, "Соответствует ТУ 22.21.29-001-78701703-2018", finalOptions)
	};

	if (data === '/menu') {
		return bot.sendMessage(chatId, "Выберите нужное действие:", menuOptions)
	};

	return bot.sendMessage(chatId, "Выберите нужное действие:", menuOptions);


})};

	

start();