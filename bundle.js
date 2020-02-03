(() => {
   const selector = selector => document.querySelector(selector)
    const create = element => document.createElement(element)
    

    const app = selector('#app');

    const Login = create('div');
    Login.classList.add('login');

    const Logo = create('img');
    Logo.src = 'logo.svg';
    Logo.classList.add('logo');

    const Form = create('form');

    Form.onsubmit = async e => {
        e.preventDefault();
        /*const email = selector('#email')
        const password = selector('#password')*/
        const [email, password] = event.target;
        const {url} = await fakeAuthenticate(email.value, password.value);

        location.href='#users';
        
        const users = await getDevelopersList(url);
        console.log(getDevelopersList)
        renderPageUsers(users);
    };

    Form.oninput = e => {
        const [email, password, button] = e.target.parentElement.children;
        (!email.validity.valid || !email.value || password.value.length <= 5) 
            ? button.setAttribute('disabled','disabled')
            : button.removeAttribute('disabled');
    };

    Form.innerHTML = '<div class=" flex-container">'+'</br>'+ '<input id="email" name="email" type="email" placeholder="Entre com seu e-mail"/>' +'</br>'+ '<input id="password" name="password" type="password" placeholder="Digite sua senha supersecreta"/>' +'</br>' +'<input id="login" type="submit" name="Entrar" value="Entrar" action="getDevelopersList()"/>'+'</br>'+'</div>'

    /**
    * bloco de código omitido
    * monte o seu formulário
    */

    app.appendChild(Logo);
    Login.appendChild(Form);

    async function fakeAuthenticate(email, password) {
        window.onload = function(){  
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://www.mocky.io/v2/5dba690e3000008c00028eb6, true");
                    xhr.onload = function (e) {
                      if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                          console.log(xhr);
                        } else {
                          console.error(xhr);
                        }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr);
        };
        xhr.send(null); 
        }

        /**
         * bloco de código omitido
         * aqui esperamos que você faça a requisição ao URL informado
         */
         console.log(password)
        const fakeJwtToken = `${btoa(email+password)}.${btoa(data.url)}.${(new Date()).getTime()+300000}`;
        /* trecho omitido */

        return data;
    }

    async function getDevelopersList(url) {
     
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://www.mocky.io/v2/5dba68fb3000007400028eb5, true");
                    xhr.onload = function (e) {
                      if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                          console.log(xhr);
                        } else {
                          console.error(xhr);
                        }
          }
        };
        xhr.onerror = function (e) {
          console.error(xhr);
        };
        xhr.send(null); 
       

        /**
         * bloco de código omitido
         * aqui esperamos que você faça a segunda requisição 
         * para carregar a lista de desenvolvedores
         */
    }

    function renderPageUsers(users) {
        app.classList.add('logged');
        Login.style.display = ('block')

        const Ul = create('ul');
        Ul.classList.add('container')

        /**
         * bloco de código omitido
         * exiba a lista de desenvolvedores
         */

        app.appendChild(Ul)
    }

    // init
    (async function(){
        const rawToken = localStorage.getItem('login');
        const token = rawToken ? rawToken.split('.') : null
        if (!token || token[2] < (new Date()).getTime()) {
            localStorage.removeItem('token');
            location.href='#login';
            app.appendChild(Login);
        } else {
            location.href='#users';
            const users = await getDevelopersList(atob(token[1]));
            renderPageUsers(users);
        }
    })()
})()
