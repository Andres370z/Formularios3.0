# pages
1. ## **login**
    esta pagina sera la encargada de mostrar visualmente y llevar la logica del login.
    en su metodo constructor:
    ```ts
    constructor(
        //inyeccion de dependencias
        private element: ElementRef,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        public formBuilder: FormBuilder,
        private _https:AuthService,
        private alert: AlertService,
        private localStore: LocalstoreService) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.textAlert = Menssage;
        
        //comprueba si debe recargar la pagina
        let reload =  this.localStore.getItem("reload")
        if (reload != "reload") {
          this.localStore.setItem("reload", "reload")
          window.location.reload()
        }
        //suscripcion 
        this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
            let token = parametros.get("token");
            //imprime en consola el valor asinado a token
            console.log(token)
            //comprueba si se ha proporsionado un token
            if (token != null) {
              console.log(token)
              this.getCustomerDetail(token)
            } else {
              let token = "ErLCUZBtopFI7hfx4ShACW8OROgHhL2h6eh4RVKQas02QaMn5w";
              this.getCustomerDetail(token)
            }
        })
    }
    ```
    **ngOnInit()**
    ```ts
    ngOnInit() {
      particlesJS.load('particles-js', '../assets/particle.json', null);
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        this.initial();
    }
    ```
    **initial()**
    este metodo crea un formulario (FormGroup): Utiliza el FormBuilder de Angular para crear un formulario que consta de dos campos: email y password. Se aplican validaciones a estos campos, como requeridos, patrones de email y longitudes mínimas.
    ```ts
    initial(){
        //inicializa el formulario
        this.form = this.formBuilder.group({
          //validadores para el email  
          email: [Menssage.empty, Validators.compose([
            Validators.required,
            Validators.pattern(Menssage.valiEmail),
            Validators.minLength(5)
          ])],
          //validadores para el password
          password: [Menssage.empty, Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])],
        });
    }
    ```
    **sidebarToggle()**
    ```
    null
    ```
    **getCustomerDetail(item: string)**
    Para obtener los detalles del cliente 
    ```ts
    getCustomerDetail(item: string){
        //mensaje que indica que la informacion esta cargando
        this.alert.loading();
        // Realiza una peticion para obtener los detalles del cliente utilizando el servicio _https
        this._https.getCustomerDetail(item).then((resulta: any)=>{
            console.log(resulta); 
                //asigna los detalles del cliente provenientes del back a customerDetail
                this.customerDetail = resulta
                this.localStore.removeEnd("reload")
                //almacena los detalles del cliente en el almacenamiento local
                this.localStore.setItem(resulta, Menssage.customerDetail)
                //mensaje que indica que la carga finalizo
                this.alert.messagefin();
        //en caso de eror o algun fallo en la peticion arrojara un error
        }).catch((err: any)=>{
            console.log(err)
            this.alert.error(Menssage.error, Menssage.server);
        });
    }
    ```
    **onSubmit(item: any)**
    La función onSubmit() realiza la acción de envío del formulario de inicio de sesión. Verifica si el formulario es válido mediante la función valid(). Luego, muestra una alerta de carga y realiza una solicitud de inicio de sesión utilizando el servicio _https. Dependiendo del resultado de la solicitud, se realizan diversas acciones, como almacenar los datos de inicio de sesión en el almacenamiento local, navegar a la página de contenido, mostrar alertas de éxito o error, y restablecer los valores del formulario.
    ```ts
    onSubmit(item: any){
      if (this.valid(item)) {
            //mensaje que indica la carga de la informacion
            this.alert.loading();
            // Realiza una solicitud de inicio de sesión utilizando el servicio _https
            this._https.login(item).then((resulta: any)=>{
                //valida que exista 
                if (resulta) {
                console.log(resulta); 
                    //alacena los datos en el almacenamiento local
                    this.localStore.setSuccessLogin(resulta)
                    this.localStore.removeEnd("reload")
                    //navega al contenido principal del aplicativo una vez el inicio de sesion es completado
                    this.router.navigate([RoutersLink.content]);
                    //mensaje de exito
                    this.alert.success(Menssage.exito, Menssage.success);
                    //this.alert.messagefin();
                    this.form.reset();
                //wn caso de que la peticion sea rechazada mostra un mensaje de error
                } else {
                this.alert.error(Menssage.error, Menssage.server);
                }
            }).catch((err: any)=>{
                console.log(err)
                this.alert.error(Menssage.error, Menssage.server);
            });
        }
    }
    ```
    **valid()** el metodo valid() se encarga de validar los campos del formulario de inicio de sesión. Verifica si el campo de email y el campo de contraseña están vacíos. Si algún campo está vacío, muestra una alerta de error correspondiente y actualiza la variable valid a false. Al final, devuelve el valor de valid, que indica si los campos son válidos (true) o no (false).
    ```ts
    valid(item: any): boolean{
        let valid = true
        //valida que el campo del formulario este VACIO
        if (item.email === Menssage.empty) {
           //de ser asi enviara un mensaje de error 
          this.alert.error(Menssage.error, Menssage.email);
          valid = false
        } //valida que el campo del formulario este VACIO
        if (item.password === Menssage.empty) {
            //de ser asi enviara un mensaje de erro
          this.alert.error(Menssage.error, Menssage.password);
          valid = false
        }
        return valid
    }
    ```
    ![image](./images/login1.png)

