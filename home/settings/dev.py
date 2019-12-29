'''Use this for development'''

from .base import *

# import pymysql

# pymysql.install_as_MySQLdb()

ALLOWED_HOSTS += ['127.0.0.1']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

DATABASES = {
    'default': {'ENGINE': 'django.db.backends.mysql',
                'NAME': 'djgrctdb',
                'USER': 'root',
                'PASSWORD': 'admin',
                'HOST': '127.0.0.1',
                'PORT': '3306'
                }
}

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)
