const languageButton = document.getElementById("languageButton");
        const notificationButton = document.getElementById("notificationButton");
        const syncButton = document.getElementById("syncButton");

        let isEnglish = false;

        languageButton.addEventListener("click", () => {
            if (isEnglish) {
                document.documentElement.lang = "pt-BR";
                isEnglish = false;
            } else {
                document.documentElement.lang = "en-US";
                isEnglish = true;
            }
        });

        notificationButton.addEventListener("click", () => {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    alert("Notificações estão ativadas!");
                } else if (permission === "denied") {
                    alert("Notificações foram negadas.");
                } else {
                    alert("Notificações não suportadas neste navegador.");
                }
            });
        });

        syncButton.addEventListener("click", () => {
            // Implemente aqui a lógica para sincronizar contas.
            alert("Contas sincronizadas com sucesso!");
        });
        //DAQUI PRA CIMA É APENAS CONFIGURAÇÕES DE REDIRECIONAMENTO RELACIONADO À TELA DE CONFIGURAÇÕES IDENTIFICADA COMO "config.html"
        function checkFields() {
            var inputs = document.querySelectorAll('input');
            var filled = true;
            inputs.forEach(function(input) {
                if (input.value === '') {
                    filled = false;
                }
            });
            if (filled) {
                window.location.href = 'viewcontas.html';
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        }