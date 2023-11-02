from gtts import gTTS


def generar_audio(text_file, lang, name_file):
	with open(text_file, "r") as file:
		text = file.read()
	file = gTTS(text=text,lang=lang)
	filename = name_file
	file.save(filename)

def main():
    nombre_archivo = input('>>> Ingrese el nombre o ruta del archivo a generar: ')
    generar_audio(nombre_archivo, "es-US", "En Busca del lago encantado Pelusa.mp3")
    print(f"Se ha generado {nombre_archivo[:-4]}.mp3")
    print('Buenas tardes')
    
if __name__ == '__main__':
    main()