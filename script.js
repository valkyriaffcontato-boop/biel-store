const modal = document.getElementById('buy-modal');
const orderForm = document.getElementById('order-form');
const cartCount = document.getElementById('cart-count');
let itemsInCart = 0;

// Abre o modal de compra preenchendo o pacote
function openModal(packageName, price) {
    document.getElementById('modal-package').value = `${packageName} (${price})`;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Trava scroll
}

// Fecha o modal
function closeModal() {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Destrava scroll
    document.getElementById('success-msg').classList.add('hidden');
}

// Envio do formulário
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pack = document.getElementById('modal-package').value;
    const ffId = document.getElementById('modal-id').value;
    const nick = document.getElementById('modal-nick').value || 'Não informado';
    const obs = document.getElementById('modal-obs').value || 'Nenhuma';

    // Simulação de carrinho
    itemsInCart++;
    cartCount.innerText = itemsInCart;

    // Criar mensagem para WhatsApp
    const message = `Olá Biel Store! 💎%0AQuero fazer um pedido:%0A%0A📦 *Pacote:* ${pack}%0A🆔 *ID:* ${ffId}%0A👤 *Nick:* ${nick}%0A📝 *Obs:* ${obs}%0A%0AAguardando instruções para o PIX!`;
    
    const whatsappUrl = `https://wa.me/5533999999999?text=${message}`;

    // Mostrar mensagem de sucesso
    document.getElementById('success-msg').classList.remove('hidden');
    
    // Redirecionar após 1.5 segundos
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        closeModal();
    }, 1500);
});

// Menu Mobile
const mobileBtn = document.getElementById('mobile-menu-btn');
mobileBtn.addEventListener('click', () => {
    // Aqui você pode implementar um menu mobile lateral se desejar
    alert("Menu em construção! Use a navegação desktop ou scroll.");
});
