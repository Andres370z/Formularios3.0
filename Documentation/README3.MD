# Servicios
A continuacion se implementaran los servicios   que  interactuan con un servidor: Los servicios se utilizan para realizar solicitudes HTTP al servidor para obtener o enviar datos.

1. ## **alertservice.ts**
    Este servicio sera el encargado de llevar a cabo las alertas o distintos tipos de mensajes 
    
    **success(msj: string, title: string)** : 
    Tenemos método llamado "success" en un servicio. Aquí se está utilizando la biblioteca "SweetAlert2" (Swal) para mostrar un mensaje de éxito (success) en forma de ventana emergente.
    ```ts
        success(msj: string, title: string) {
        this.jsonConfig.text = title;
        this.jsonConfig.title = msj;
        this.jsonConfig.icon = 'success';
        Swal.fire(this.jsonConfig);
    }
    ```

    **error(msj: string, title: string)**:
    En este caso, el método se llama "error" y también utiliza la biblioteca "SweetAlert2" (Swal) para mostrar un mensaje de error en forma de ventana emergente.
    Al igual que en el método anterior, el método "error" acepta dos parámetros: "msj" y "title", que representan el mensaje y el título de la ventana emergente respectivamente.
    ```ts   
        error(msj: string, title: string) {
        this.jsonConfig.text = title;
        this.jsonConfig.title = msj;
        this.jsonConfig.icon = 'error';
        Swal.fire(this.jsonConfig);
    }
    ```
    **messagefin()**
    este método "messagefin" se encarga de cerrar la ventana emergente actualmente abierta utilizando la función "close" proporcionada por la biblioteca Swal.
    ```ts
        messagefin() {
        Swal.close();
    }
    ```
    **loading()**
    este método "loading" se encarga de mostrar una ventana emergente de carga con una imagen personalizada utilizando la biblioteca Swal. Puedes ajustar las propiedades del objeto de configuración según tus necesidades, como cambiar la imagen, agregar un título o ajustar el estilo de la ventana emergente.
    ```ts
        loading() {
        Swal.fire({
        title: '',
        imageUrl: 'assets/img/logoSoft2.gif',
        imageAlt: 'Custom image',
        showConfirmButton: false,
        toast: true
        });
    }
    ```
    **modalFull(msj: string, title: string)**
    este método "modalFull" se encarga de mostrar una ventana emergente de tipo modal con contenido HTML personalizado utilizando la biblioteca Swal. Puedes ajustar las propiedades del objeto de configuración según tus necesidades, como agregar un título, personalizar el contenido HTML o cambiar los íconos utilizados.
    ```ts
    modalFull(msj: string, title: string){
        Swal.fire({
        title: '<strong></strong>',
        icon: 'info',
        html:
            'You can use <b>bold text</b>, ' +
            '<a href="//sweetalert2.github.io">links</a> ' +
            'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
        })
    }
    ```
2. ## **auth.service.ts**
    Si bien todos los servicios de este aplicativo son importantes, este es el mas importante entre los importantes, ya que este servicio es el encargado de hacer peticiones directamente a la API. 
    
    en su metodo constructor:
    ```ts
    constructor(
        private registeresquest: HttpsService, 
        private route: Router, 
        private alert: AlertService //llama al servicio de Alerts
    ) { }
    ```
    **create(inform:any)**
    este metodo creara un registro con base a una informacion proporsionada. Este recibe como parametro un un objeto (inform) con la informacion del registro

    ```ts
    create(inform:any){
        const data = {
        //se crea un objeto 'data con la informacion de resgistro
        businessName: inform.businessName,
        identificationCard: inform.identificationCard,
        idCategoryToRegister: inform.idCategoryToRegister,
        address: inform.address,
        phone: inform.phone,
        email: inform.email,
        password: "sumateClaro",
        password_confirmation : "sumateClaro",
        idCity: inform.idCity
        };
        //realiza una peticion de registro mediante el metodo POST 
        return  this.registeresquest.POST(RoutersLink.register, data)
    }
    ```
    **resgisterImageEvents(inform:any)**
    En esta parte se realizara un registro de la imagen del evento usando la informacion proporsionada, como parametro tenemos a inform que es un objeto con la informacion de la imagen
    ```ts
    resgisterImageEvents(inform:any){
        //realiza una solicitud POST mediante el servicio de registeresquest
        return  this.registeresquest.POST(RoutersLink.resgisterImageEvents, inform)
    }
    ```
    **login(inform:any)**
     el método "login" acepta un objeto "inform" que contiene la información de inicio de sesión. Luego, realiza una solicitud POST utilizando el método "POST" del servicio "registeresquest", pasando la ruta "RoutersLink.loginApi" y el objeto "inform" como parámetros.
    ```ts
        login(inform:any){
        return  this.registeresquest.POST(RoutersLink.loginApi, inform)
    }
    ```
    **cerra()** 
    este metodo tiene como funcion cerrar sesion.
    ```ts
    cerra(){
        this.alert.messagefin();
        localStorage.removeItem('token')
        this.route.navigate(['pages/login']);
    }
    ```
    **getCity()**
    Este metodo sera el encargado de traer las ciudades
    ```ts
        getCity(){
        return  this.registeresquest.GET(RoutersLink.city)
    }
    ```
    **getStatus(item: string)**
    el método "getStatus" acepta un parámetro "item" que representa el elemento para el cual se desea obtener el estado. Luego, realiza una solicitud GET utilizando el método "GET" del servicio "registeresquest", pasando la ruta "RoutersLink.status" concatenada con el valor del parámetro "item".
    ```ts
    getStatus(item: string){
        return  this.registeresquest.GET(RoutersLink.status+item)
    }
    ```
    **getUsers()**
    Trae los usuarios que previamente fueron registrados.
    ```ts
    getUsers(){
        return  this.registeresquest.GET("user")
    }
    ```
    **getUsersData()**
    el método "getUsersData" acepta un parámetro "item" de tipo number. Luego, realiza una solicitud GET utilizando el método "GET" del servicio "registeresquest", pasando la ruta "RoutersLink.getUsersData" concatenada con el valor del parámetro "item".
    ```ts
    getUsersData(item: number){
        return  this.registeresquest.GET(RoutersLink.getUsersData+item)
    }
    ```
    **getCustomerDetail(item: string)** 
    este metodo se encarga de obtener los detalles del usuario registrado; "getCustomerDetail" acepta un parámetro "item" de tipo string. Luego, realiza una solicitud GET utilizando el método "GET" del servicio "registeresquest", pasando la ruta "RoutersLink.customerDetail" concatenada con el valor del parámetro "item".
    ```ts
    getCustomerDetail(item: string){
        return  this.registeresquest.GET(RoutersLink.customerDetail+item)
    }
    ```
    **gettotal(item: number, search: string)**
    el método "getTotal" acepta dos parámetros: "item" de tipo number, y "search" de tipo string. Luego, realiza una solicitud GET utilizando el método "GET" del servicio "registeresquest", pasando la ruta "RoutersLink.gettotal" concatenada con los valores de los parámetros "item" y "search".
    ```ts
    gettotal(item: number, search: string){
        return  this.registeresquest.GET(RoutersLink.gettotal+item+'&buscar='+search)
    }
    ```
    **getmenu(item: number)** 
    el método "getMenu" acepta un parámetro "item" que representa el elemento para el cual se desea obtener el menú. Luego, realiza una solicitud GET utilizando el método "GET" del servicio "registeresquest", pasando la ruta "RoutersLink.menu" concatenada con el valor del parámetro "item".
    ```ts
    getmenu(item: number, ){
        return  this.registeresquest.GET(RoutersLink.menu+item)
    }
    ```
    **gettotaldatagallery(item: number, )**
    obtiene el total de datos, realiza una solicitud GET utilizando el método GET del servicio 'registeresquest', pasando la ruta 'RoutersLink.gettotaldatagallery' concatenada con el parámetro 'item'. y por ultimo como parametro recibe un (item) de tipo number
    ```ts
    gettotaldatagallery(item: number, ){
        return  this.registeresquest.GET(RoutersLink.gettotaldatagallery+item)
    }
    ```
    **getEvent(item: number)**
    Este metodo tiene como funcion traer los o el evento(s) existentes, realiza una solicitud GET utilizando el método GET del servicio 'registeresquest', pasa la ruta 'RoutersLink.getEvent' concatenada con el parámetro 'item'. y por ultimo tambien recibe un parametro (item) de tipo number
    ```ts
    getEvent(item: number){
        return  this.registeresquest.GET(RoutersLink.getEvent+item)
    }
    ```
    **gettotaldata(item: number, )**
    Este metodo obtiene el total de datos de un elemento específico. Realiza una solicitud GET utilizando el método GET del servicio 'registeresquest',pasando la ruta 'RoutersLink.gettotaldata' concatenada con el parámetro 'item'.
    ```ts
    gettotaldataDelete(item: number, ){
        return  this.registeresquest.GET(RoutersLink.gettotaldataDelete+item)
    }
    ```
    **deleteRegisterImageEvent(item: number)**
    este metodo deleteRegisterImageEvent(item: number) se encarga de Eliminar una imagen de un evento. Realiza una solicitud GET utilizando el método GET del servicio 'registeresquest',pasando la ruta 'RoutersLink.gettotaldata' concatenada con el parámetro 'item'.

    ```ts
    deleteRegisterImageEvent(item: number){
        return  this.registeresquest.GET(RoutersLink.deleteRegisterImageEvent+item)
    }
    ```

    **getEventImg(item: number, itemEvent: string)**
    Este metodo obtiene la imagen de un evento en especifico, recibe 2 parametros, item (number), itemEvent(string) 
    Realiza una solicitud GET utilizando el método GET del servicio 'registeresquest', pasando la ruta 'RoutersLink.getEventImg' concatenada con los parámetros 'item' y 'itemEvent'.
    ```ts
    getEventImg(item: number, itemEvent: string){
        return  this.registeresquest.GET(RoutersLink.getEventImg+item+'&idevento='+itemEvent)
    }
    ```
    **getCategory(), getBenefits(), getScale(), getChallenges()**
    Estos métodos realizan solicitudes GET utilizando el método "GET" del servicio "registeresquest" para obtener información específica.
    ```ts
    getCategory(){
        return  this.registeresquest.GET(RoutersLink.category)
    }

    getBenefits(){
        return  this.registeresquest.GET(RoutersLink.benefits)
    }
    getScale(){
        return  this.registeresquest.GET(RoutersLink.scale)
    }

    getChallenges(){
        return  this.registeresquest.GET(RoutersLink.challenges)
    }
    ```
    **forgotPassword(item: string)** 
    Este método realiza una solicitud GET utilizando el método "GET" del servicio "registeresquest" para enviar una solicitud de restablecimiento de contraseña para un usuario específico. La ruta utilizada es 'RoutersLink.forgotPassword' concatenada con el parámetro 'item', que es el correo electrónico del usuario.
    ```ts
    forgotPassword(item: string){
        return  this.registeresquest.GET(RoutersLink.forgotPassword+item)
    }
    ```
    **reateExpoalidos(inform:any)** crea un nuevo registro para Expoaliados

    ```ts
    createExpoalidos(inform:any){
         // Construye un objeto 'data' con la información proporcionada en el parámetro 'inform'.
        const data = {
        businessName: inform.businessName,
        identificationCard: inform.identificationCard,
        idCategoryToRegister: inform.idCategoryToRegister,
        address: inform.address,
        phone: inform.phone,
        email: inform.email,
        monthlyBudget: inform.monthlyBudget,
        contactPerson : inform.contactPerson,
        terms: inform.terms,
        legalRepresentatives: inform.terms
        };
        // Realiza una solicitud POST utilizando el método POST del servicio 'registeresquest',
        return  this.registeresquest.POST(RoutersLink.registerExpoAllies, data)
    }
    ```
    **createChallenge(inform:any)** Este método usa una solicitud POST. Construye un objeto formData utilizando la información proporcionada en el parámetro inform. Luego, realiza una solicitud POST utilizando el método POST del servicio registeresquest, pasando la ruta RoutersLink.registerChallenge y el objeto formData como datos de la solicitud. El método devuelve el resultado de la solicitud POST.
    ```ts
    createChallenge(inform:any){
        //Construye un objeto formData utilizando la información proporcionada en el parámetro inform.
        const formData = new FormData(); 
        formData.append("file", inform.file);
        formData.append("businessDescription", inform.description);
        formData.append("nit", inform.nit);
        formData.append("businessName", inform.businessName);
        formData.append("nameWorks", inform.name);
        formData.append("numberContact", inform.numberContact);
        formData.append("typeCategory", inform.typeCategory);
        //El método devuelve el resultado de la solicitud POST.
        return  this.registeresquest.POST(RoutersLink.registerChallenge, formData)
    }
    ```
    **createEditUsers(inform:any)** Este método crea o edita un usuario utilizando una solicitud POST. Construye un objeto data utilizando la información proporcionada en el parámetro inform. Luego realiza una solicitud POST utilizando el método POST del servicio registeresquest, pasando la ruta RoutersLink.registerUpdate y el objeto data como datos de la solicitud. El método devuelve el resultado de la solicitud POST para crear o editar el usuario.
    ```ts
    createEditUsers(inform:any){
        //crea el objeto
        const data = {
        businessName: inform.businessName,
        identificationCard: inform.identificationCard,
        idCategoryToRegister: inform.idCategoryToRegister,
        address: inform.address,
        phone: inform.phone,
        email: inform.email,
        idCity: inform.idCity,
        businessDescription: inform.businessDescription,
        contactPerson : inform.contactPerson,
        telephoneContact: inform.telephoneContact,
        legalRepresentatives: inform.legalRepresentatives,
        password: inform.password,
        id: inform.id
        };
        //devuelve una solicitud post
        return  this.registeresquest.POST(RoutersLink.registerUpdate, data)
    }
    ```
    **createUpdatePassword(inform:any)**
    Este método actualiza la contraseña de un usuario utilizando una solicitud POST. Construye un objeto data utilizando la información proporcionada en el parámetro inform. Luego, realiza una solicitud POST utilizando el método POST del servicio registeresquest, pasando la ruta RoutersLink.passwordUpdate y el objeto data como datos de la solicitud. El método devuelve el resultado de la solicitud POST para actualizar la contraseña.
    ```ts
    createUpdatePassword(inform:any){
        //objeto data a partir de lo que traiga inform
        const data = {
        id: inform.id,
        email: inform.email,
        password: inform.password,
        };
        return  this.registeresquest.POST(RoutersLink.passwordUpdate, data)
    }
    ```
    **createImgUpdate(inform:any)**
    Este método actualiza una imagen utilizando una solicitud POST. Construye un objeto formData utilizando la información proporcionada en el parámetro inform. Luego, realiza una solicitud POST utilizando el método POST del servicio registeresquest, pasando la ruta RoutersLink.imgUpdate y el objeto formData como datos de la solicitud. El método devuelve el resultado de la solicitud POST para actualizar la imagen.
    ```ts
    createImgUpdate(inform:any){
        //objeto formData 
        const formData = new FormData(); 
        formData.append("file", inform.file);
        formData.append("id", inform.id);
        return  this.registeresquest.POST(RoutersLink.imgUpdate, formData)
    }
    ```
3. ## **excel.service.ts**
    este servicio sera el encargado de convertir los datos alojados en una tabla, para posteriormente convertirlos en un archivo de excel
    **public exportAsExcelFile(item: any, name: string)** 
    Este método exporta los datos como un archivo de Excel. Convierte el objeto item en una hoja de cálculo utilizando la biblioteca XLSX. Luego, crea un objeto workbook con la hoja de cálculo y el nombre proporcionados. Utiliza la función XLSX.write para convertir el workbook en un archivo de Excel. Finalmente, utiliza la función saveAsExcelFile para guardar el archivo de Excel.
    ```ts
    public exportAsExcelFile(item: any, name: string): void {

        console.log(item);
        //convierte el objeto item en una hoja de calculo usando la biblioteca XLSX
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(item);
        console.log('worksheet', worksheet);
        //crea un objeto  workbook con la hoja de calculo
        const workbook: XLSX.WorkBook = {
        Sheets: { data: worksheet },
        SheetNames: ['data']
        };
        //convierte el workbook en un archivo excel usando la funcion 'XLSX.write'
        const excelBuffer: any = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
        });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, name);
    }
    ```
    **private saveAsExcelFile(buffer: any, fileName: string)**
    ```ts
        private saveAsExcelFile(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], {
        type: this.excelType
        });
        saveAs(data, fileName + '_export_' + new Date().getTime() + '.xlsx');
    }
    ```
4. ## **https.service.ts**
    Esta clase representa un servicio HTTP en Angular que utiliza el módulo HttpClient para realizar solicitudes HTTP a una API. Tiene métodos para realizar solicitudes POST, GET, PUT y DELETE, cada uno de los cuales devuelve una promesa que se resuelve con los datos de respuesta de la API.

    ```ts
    export class HttpsService {
    private api = environment.api
    constructor( 
        private http: HttpClient) { }
        public headers=new HttpHeaders().set('Content-Type','multipart/form-data');
        //solicitud POST a la API
        POST =async (sub: string, obj: any) => await this.http.post<any>(this.api + sub , obj).toPromise();
        //solicitud POST a la API
        POSTDATA =async (sub: string, obj: any) => await this.http.post<any>(this.api + sub , obj, {headers: this.headers}).toPromise();
        //solicitud GET a la API
        GET = async (sub: string) => await this.http.get<any>(this.api + sub).toPromise();
        //solicitud PUT a la API
        PUT = async (sub: string,obj:any) => await this.http.put<any>(this.api + sub, obj).toPromise();
        //solicitud de tipo DELETE a la API
        DELETE = async(sub: string) => await this.http.delete<any>(this.api + sub).toPromise();
    }
    ```
5. ## **interceptor.service.ts**
    Este código define un interceptor HTTP llamado InterceptorService. El método intercept se implementa para interceptar y modificar las solicitudes salientes.
    ```ts
    @Injectable()
    export class InterceptorService  implements HttpInterceptor{
        constructor() { }
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            let final: string = `${localStorage.getItem('token')}`;
            const token: any = JSON.parse(final);
            //comprueba que exista un token
            if (!token) {
            return next.handle(req);
            }
            const headers = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token.authorisation.token}`)
            });
            return next.handle(headers);
        }
    }
    ```
6. ##  **localstore.service.ts**
    Este servicio puede utilizarse para almacenar y recuperar datos en el almacenamiento local del navegador, como tokens de autenticación u otros datos necesarios en la aplicación.

    **setSuccessLogin(item: any)** Almacena los datos de inicio de sesion exitosos en el almacenamiento local
    ```ts
    setSuccessLogin(item: any){
        localStorage.setItem(this.login,JSON.stringify(item))
    }
    ```
    **getSuccessLogin()** obtiene los datos de inicio de sesion exitosos almacenados en el almavenamiento local
    ```ts
    getSuccessLogin():any{
        let dataUSers: string = `${localStorage.getItem(this.login)}`;
        return JSON.parse(dataUSers);
    }
    ```
    **setItem() y getItem**
    ```ts
    setItem(item: any, data: string){
        localStorage.setItem(data,JSON.stringify(item))
    }

    getItem(data: string):any{
        let dataUSers: string = `${localStorage.getItem(data)}`;
        return JSON.parse(dataUSers);
    }
    ```
    **clear()** borra todos los datos alamcenados en local storage
    ```ts
    clear(){
        localStorage.clear();
    }
    ```
    **removeEnd()** elimina un dato almacenado en el almacenamiento local
    ```ts
        removeEnd(data: string){
        localStorage.removeItem(data)
    }
    ```





