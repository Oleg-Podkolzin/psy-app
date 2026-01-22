from flask import Flask, request
import telebot
from config import API_TOKEN

bot = telebot.TeleBot(API_TOKEN)
app = Flask(__name__)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.send_message(message.chat.id, "Привет! Это бот поддержки. Открой мини-приложение.")

@app.route('/')
def index():
    return "Bot is running!"

if __name__ == "__main__":
    print("Бот запущен. Ожидаю сообщения...")
    bot.remove_webhook()
    bot.polling(none_stop=True)