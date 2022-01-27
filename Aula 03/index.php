<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Aula 03 - Formulário e Tags Semânticas</title>
</head>

<body>
    <form action="aula03.php" method="POST">
        <div>
            <label for="nome">Nome:</label>
            <input id="nome" name="nome" placeholder="Digite o seu nome completo" type="text">
        </div>
        <div>
            <label for="email">E-mail:</label>
            <input id="email" name="email" value="lfbicalho@outlook.com" placeholder="Digite o seu e-mail" type="email">
        </div>
        <div>
            <input id="aceite" name="aceite" type="checkbox" required>
            <label for="aceite">Aceite os termos</label>
        </div>
        <div>
            O que você prefere?
            <input id="r1" name="fruta-preferida" value="banana" type="radio" checked>
            <label for="r1">Banana</label>
            <input id="r2" name="fruta-preferida" value="maçã" type="radio">
            <label for="r2">Maçã</label>
            <input id="r3" name="fruta-preferida" value="morango" type="radio">
            <label for="r3">Morango</label>
        </div>
        <div>
            <label for="sugestoes">Sugestões:</label>
            <textarea id="sugestoes" name="sugestoes" placeholder="Dê alguma sugestão!"></textarea>
        </div>
        <input type="submit" />
    </form>
</body>

</html>