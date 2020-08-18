# Ayuda

Un producto de [PotatoBite](https://PotatoBite.github.io). Todos los derechos reservados.

* TOC
{: toc}

## Introducción ##

MachineHandler es un programa destinado a ser utilizado como submódulo de [CheckDoseQt](http://PotatoBite.github.io/products/CheckDoseQt). Su función principal es proporcionar al Físico Clínico una herramienta para editar la base de datos clínica utilizada por CheckDoseQt y modificar los valores que contienen los Linacs y Beams asociados.


### Creación de una clínica ###

En primer lugar, antes de usar CheckDoseQt, debe proporcionar a través de MachineHandler un archivo válido de base de datos clínica que contenga la información sobre los Linacs y sus Haces (Beams) asociados que usará en CheckDoseQt.

Naturalmente, la primera tarea es crear una clínica. Una clínica no es más que un archivo de base de datos sqlite cifrado que contiene en tablas toda la información necesaria para que CheckDoseQt funcione correctamente. La base de datos es generada automáticamente por el módulo MachineHandler cuando se crea. Por ende, debe ser obligatoriamente evitado el editarla manualmente.

En el cuadro de diálogo Información de la clínica, seleccione el botón "Agregar clínica" para crear una nueva clínica:

!["Agregar una clínica"](./ res / add_clinic.png)

Al crear una clínica, se crea automáticamente un archivo sqlite cifrado y no es necesaria la intervención del hombre en el proceso. Todas las tablas requeridas, valores predeterminados y plantillas se agregan automáticamente ejecutando una serie de secuencia de sentencias SQL, motivo que puede generar retrasos en el proceso, principalmente en sistemas antiguos.

Aparecerá un cuadro de diálogo que le pedirá un nombre para el archivo de base de datos de su clínica. Dé un nombre a su clínica, tenga cuidado de evitar el uso de espacios o cualquier otro carácter dependiente del idioma como **"ñ"** o **"@"**. Con fines orientativos, utilizaremos *"OurClinic"* como nuestro nombre de clínica predeterminado en la presente Ayuda.

Después de crear una clínica, el selector de clínicas debe actualizarse con el valor de la clínica seleccionada:

!["Se ha agregado una clínica"](./ res / added_clinic.png)

----



### El selector de clínicas ###

MachineHandler proporciona un selector de archivos de base de datos de clínicas válidas a través de un widget selector. Cambiar el valor seleccionado del widget actualiza la tabla de Linacs en la parte inferior del cuadro de diálogo.

La tabla de Linacs muestra los Linacs definidos en la clínica seleccionada actualmente, su ID, Nombre y Estado. Si aún no se ha definido ningún Linac, la tabla se muestra vacía.

Al crear una nueva Clínica, el Selector de Clínicas actualiza su lista interna de archivos clínicos presentes en el directorio de ejecución.

----



### Editar una clínica ###

Cuando se hace clic en el botón `Editar clínica`, se muestra un cuadro de diálogo que solicita una nuevo nombre para su clínica. Proporcionar un nuevo nombre para su clínica y aceptar el diálogo hace que la clínica seleccionada cambie sus nombres.

> ** ADVERTENCIA: ** Por favor, asegúrese de evitar la ejecución concurrente de 2 instancias de MachineHandler y editar una clínica en una instancia principal mientras realiza cualquier otra operación sobre la misma clínica en otra instancia. Podría causar ** errores irreversibles ** en el archivo de base de datos de la clínica.

----



### Eliminación de una clínica ###

Eliminar una clínica es un proceso que implica la autorización del usuario a través de la interfaz del sistema para privilegios elevados, ya que no es una tarea trivial sino destructiva. Para eliminar una clínica, que debe interpretarse como la eliminación de la información relacionada con la clínica y la eliminación física del archivo que contiene estos datos, haga clic en el botón `Eliminar Clínica` después de seleccionar una clínica a través del Selector de Clínicas.

----



## Avanzando ##



### Añadiendo Linacs a la Clínica ###

Agregar un Linac es tan simple como hacer clic en el botón `Agregar Linac` después de seleccionar la clínica en la que desea almacenar su Linac con el `Selecctor de Clínicas`. Se muestra un cuadro de diálogo que contiene los campos obligatorios que debe completar el usuario.



#### El diálogo de información de la máquina ####

!["MachineInfo"](./ res / machine_info.png)

> Nota: asegúrese de utilizar **IDs únicos** para su Linac, ya que están indexados utilizando esta propiedad en la base de datos.



Los campos deben coincidir con las siguientes propiedades para ser aceptados.

| Parámetro | Valor | Información |
| : --------------- | : ------------------------------------------------- ---------- | -------------------------------------------------- - |
| Nombre de la máquina | 4-12 caracteres alfanuméricos | Nombre mostrado para el Linac actual en DB |
| ID | 4-12 caracteres numéricos | ID para acceder al Linac actual en CheckDoseQt |
| Fabricante | Seleccionar entre los valores disponibles | - |
| Modelo | Seleccionar entre los valores disponibles | - |
| Modelo personalizado | Defina un nombre de modelo personalizado si el disponible no coincide con su Linac | - |
| Nombre responsable | Hasta 40 caracteres alfanuméricos: | Responsable de la puesta en servicio del actual Linac |

![](./ res / machine_info_2.png)

Después de completar los campos, haga clic en el botón `Siguiente` para comenzar a definir **Beams** para su **Linac**.



#### El cuadro de diálogo Beam Info ####

![](./ res / beam_info.png)

El cuadro de diálogo Beam Info contiene un selector de energía y un selector de tipo de energía. Además, se muestra una tabla Beam en la parte inferior, similar a la que se muestra en el Diálogo de Información de la clínica. La tabla muestra los Beams que pertenecen al Linac seleccionado actualmente. Si aún no se ha creado ningún Beam, es normal que las tablas estén vacías.

Después de creado el Linac, al menos se debe agregar y validar un Haz antes de poder usarlo en CheckDoseQt.

----



### Agregar un Haz ###

Haga clic en el botón `Add Beam` para agregar un nuevo Haz al Linac actualmente editado en la base de datos.

> Nota: Antes de agregar un Haz, asegúrese de seleccionar el valor de energía y el tipo de partícula adecuados.



#### Comisionamiento del Haz ####

Se debe mostrar un cuadro de diálogo solicitando información obligatoria:

! [] (./ res / beam_commissioning.png)

Los campos obligatorios deben completarse para aceptar y continuar con la siguiente etapa. Para completar esta tarea, los valores introducidos en el diálogo actual y reenvío deben ser compatibles con el [AAPM TG-114](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1118/1.3521473). Algunos de ellos se muestran aquí solo como referencia, para obtener más información sobre la definición de estos parámetros, consulte el [AAPM TG-114](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1118/1.3521473).



| Parámetro | Informacion |
| --------------- | -------------------------------------------------- ---------- |
| Beam Name | Proporcione un nombre de haz para mejorar la identificación |
| SSD_0 | Distancia de la fuente a la superficie del maniquí para las condiciones de normalización y la tasa de dosis de referencia. |
| d_0 | Profundidad de normalización para el sistema dosimétrico: la profundidad a la que los parámetros sensibles a la profundidad adquieren un valor de 1 o 100% |
| D_0_rate | La tasa de dosis a la profundidad de normalización de d_0, para el tamaño del campo de referencia r_0. Normalmente se establece en 1 cGy / MU. |
| d_max | Profundidad de normalización máxima, normalmente establecida en la profundidad máxima (d_max) cuando SSD_0 = 100. |
| Ref. Field Size | El tamaño del campo de referencia (r_0) para la modalidad de tratamiento que define la tasa de dosis de referencia D_0_rate |

Después de completar los parámetros, haga clic en `Siguiente` para comenzar a proporcionar los archivos descriptores del haz en el siguiente cuadro de diálogo.

----



#### Descriptores de haz ####

El siguiente cuadro de diálogo está destinado a ser utilizado para importar directamente a la base de datos los archivos que contienen los datos de cada haz. Una vez creado el haz, deberá importar los archivos de parámetros del descriptor del haz.

Los parámetros descriptores, una vez más según [AAPM TG-114](https://aapm.onlinelibrary.wiley.com/doi/abs/10.1118/1.3521473) son:

- **TPR**: Tissue-Phantom Ratio
- **PDD**: Percent Depth Dose
- **PDD_n**: Percent Depth Dose Normalized
- **Sc**: Collimator Scatter Factor
- **Sp**: Phantom Scatter Factor
- **WF**: Wedge Factor
- **WP**: Wedge Profiles
- **OAR**: Off-Axis Ratio

En MachineHandler, debe proporcionar los archivos de descriptores de haz de la siguiente manera:

| Archivo | Que contiene | Reglas |
| --------- | ------------------- | -------------------------------------------------- ---------- |
| TPR.txt | TPR ó PDD ó PDD_n | - El valor más a la izquierda, más arriba debe ser 0. |
| | | - La primera columna es la profundidad, descendiendo desde 0 a max_depth |
| | | - La 1ª fila es un tamaño de campo cuadrado equivalente desde 0 a max_eq_field_size |
| Sc_Sp.txt | Sc & Sp | - La 1ª columna es el tamaño de campo cuadrado equivalente desde 0 a max_eq_field_size |
| | | - La segunda columna es Sc |
| | | - La tercera columna es Sp |
| WF.txt | WF | - @todo |
| WP.txt | WP | - @todo |
| OAR.txt | OAR | - @todo |

Para importar un archivo descriptor en los datos de parámetros de un haz, use el botón de carga relacionado con el parámetro que desea cargar:

!["BeamDescriptor"](./ res / beam_descriptor.png)

Cada botón abre un cuadro de diálogo que solicita la importación del archivo. Se han definido algunos filtros para facilitar el proceso de importación. Al seleccionar un archivo válido, la etiqueta en el medio mostrará la ruta del archivo seleccionado.

El botón `C` al lado de cada etiqueta borra el valor del archivo seleccionado, en caso de que se haya confundido y seleccionado un archivo incorrecto en una categoría diferente o similar.

Una vez que haya seleccionado todos los archivos que desea importar, al hacer clic en el botón "Validar" se activará una serie de revisiones de archivos para detectar anomalías o irregularidades. Una vez finalizan las pruebas, verá algunos cuadros de diálogo que brindan información sobre el resultado del proceso de verificación y le preguntan si desea volver a (tal vez) ingresar otros archivos.

!["Pruebas de BeamDescriptor"](./ res / beam_descriptor2.png)

Si el archivo pasa la prueba, su etiqueta se muestra con color de fondo verde oscuro, si no pasa la prueba se mostrará en color de fondo rojo, como en la imagen anterior.

----



#### Finalización de la adición de Haces #####

Una vez que haya validado todos los archivos que necesita la máquina, puede cerrar el cuadro de diálogo aceptando las indicaciones que se muestran después de hacer clic en el botón `Validar`.

Lo llevará de regreso al cuadro de diálogo `Beams Info` para seguir agregando haces al *Linac* en edición o tal vez para completar el proceso de puesta en marcha.



### Editando Linacs y Beams ###

@todo


====

## Contact and Support

Contáctenos en PotatoBite@gmail.com ante cualquier duda o pregunta.
