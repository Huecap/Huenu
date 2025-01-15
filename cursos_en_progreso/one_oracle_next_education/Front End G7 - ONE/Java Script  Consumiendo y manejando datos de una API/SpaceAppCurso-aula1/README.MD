# Sincronicidad de JS

El código síncrono se ejecuta inmediatamente y bloquea otras operaciones, mientras que el asíncrono se coloca en la Task Queue y se ejecuta después de que las operaciones síncronas se completen.

Podemos desglosar el flujo de ejecución de tareas en JavaScript en tres partes: Event Loop, Call Stack y Task Queue. El Event Loop es un ciclo que monitorea y ejecuta las acciones que enviamos a JavaScript. El proceso de lectura del código solo se finaliza cuando no hay más acciones que ejecutar. La call stack es un mecanismo que organiza cómo funcionará el script cuando existen muchas funciones: qué función se está ejecutando, cuáles se están llamando dentro de alguna función, etc. Por último, la task queue es la cola de tareas asíncronas. Si algo necesita ocurrir en segundo plano o más tarde, es en esta cola donde se agregará y ejecutará más tarde.


## Event Loop - call Stack - task queue
