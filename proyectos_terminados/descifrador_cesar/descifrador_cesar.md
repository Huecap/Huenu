# Descifrador Cesar


## *¿Qué es el cifrado cesar?*
> El Cifrado de Caesar es uno de los métodos de codificación conocidos más antiguos. Es muy simple - sólo se cambian las posiciones del alfabeto. La transformación se denomina ROTN, donde N es el valor de cambio de posiciones y ROT significa "ROTAR", por que es un cambio cíclico.

*Ejemplo* 
---
> `ROT2 significa que "a" se vuelve "c", "b" se vuelve "d" y al final "y" se vuelve "a", y "z" se vuelve "b". `



> Debido a eso, es un método muy débil, ya que puedes revisar todas las combinaciones posibles de manera muy rápida.

---

### El script
> Este script fue desarrollado para vencer el nivel de [Software Seguro](https://www.softwareseguro.com.ar/) 
> - [Link del desafío](https://www.softwareseguro.com.ar/enunciados/mensaje-cifrado/index.html)

> Solicita que se ingrese el nombre de un archvio que contenga contenido cifrado utilizando el cifrado cesar.
> Luego muestar por consola todas las posibles opciónes de descifrado.


*Ejemplo*
```bash 
-------------------
Texto: 31 rdmshqúrdmshq.ptd.st.l mñ.dr.lh.b qhbh úrdmshq.ptd.st.rtdnñ.dr.lh.cdrdñúrdmshq.ptd.st.lhq c .dr.lh.cdrb mrñúrdmshq.ptd.st.mñlaqd.dr.lh.b mbhímúrdmshq.ptd.st.añb .dr.lh.qdetfhñúrdmshq.ptd.st. kl .dr.lh.qdf kñ,rdmshq.ptd.dwhrsdr,,,rdmshq.ptd.uhuñ.o q . l qsd,
-------------------
Texto: 32 sentir,sentir que tu mano es mi caricia,sentir que tu sueño es mi deseo,sentir que tu mirada es mi descanso,sentir que tu nombre es mi canción,sentir que tu boca es mi refugio,sentir que tu alma es mi regalo.sentir que existes...sentir que vivo para amarte.
-------------------
Texto: 33 tfñujs.tfñujsarvfauvanbñpaftanjadbsjdjb.tfñujsarvfauvatvfopaftanjaeftfp.tfñujsarvfauvanjsbebaftanjaeftdbñtp.tfñujsarvfauvañpncsfaftanjadbñdjúñ.tfñujsarvfauvacpdbaftanjasfgvhjp.tfñujsarvfauvabmnbaftanjasfhbmp tfñujsarvfafyjtuft   tfñujsarvfawjwpaqbsbabnbsuf 
-------------------
Texto: 34 ugovkt ugovktbswgbvwbñcoqbgubñkbectkekc ugovktbswgbvwbuwgpqbgubñkbfgugq ugovktbswgbvwbñktcfcbgubñkbfguecouq ugovktbswgbvwboqñdtgbgubñkbecoek,o ugovktbswgbvwbdqecbgubñkbtghwikq ugovktbswgbvwbcnñcbgubñkbtgicnqaugovktbswgbgzkuvguaaaugovktbswgbxkxqbrctcbcñctvga
-------------------
Texto: 35 vhpwluavhpwluctxhcwxcodprchvcolcfdulfldavhpwluctxhcwxcvxhqrchvcolcghvhravhpwluctxhcwxcoludgdchvcolcghvfdpvravhpwluctxhcwxcproeuhchvcolcfdpfl.pavhpwluctxhcwxcerfdchvcolcuhixjlravhpwluctxhcwxcdñodchvcolcuhjdñrbvhpwluctxhchálvwhvbbbvhpwluctxhcylyrcsdudcdoduwhb
-------------------
``````