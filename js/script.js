// ==========================================
// VALIDACIÓN Y ENVÍO DEL FORMULARIO DE CONTACTO
// ==========================================

(function() {
  // Esperar a que el DOM esté completamente cargado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormulario);
  } else {
    initFormulario();
  }

  function initFormulario() {
    const form = document.getElementById('formContacto');
    if (!form) return; // Si no existe el formulario, no hacer nada

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Obtener campos
      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');
      const telefono = document.getElementById('telefono');
      const mensaje = document.getElementById('mensaje');
      const mensajeExito = document.getElementById('mensajeExito');

      // Limpiar errores previos
      limpiarErrores();

      // Validar campo por campo
      let errores = [];

      // Validar nombre
      if (!nombre.value.trim() || nombre.value.trim().length < 2) {
        errores.push('El nombre debe tener al menos 2 caracteres.');
        marcarError(nombre);
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        errores.push('Ingresa un correo electrónico válido (ej: usuario@dominio.com).');
        marcarError(email);
      }

      // Validar mensaje
      if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        errores.push('El mensaje debe tener al menos 10 caracteres.');
        marcarError(mensaje);
      }

      // Si hay errores, mostrar alerta y detener
      if (errores.length > 0) {
        alert('⚠️ Por favor, corrige los siguientes errores:\n\n• ' + errores.join('\n• '));
        return;
      }

      // --- SIMULACIÓN DE ENVÍO EXITOSO ---
      // En un entorno real, aquí iría un fetch() o XMLHttpRequest

      // Mostrar mensaje de éxito
      if (mensajeExito) {
        mensajeExito.style.display = 'block';
        mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Limpiar formulario
      form.reset();

      // Ocultar mensaje después de 6 segundos
      setTimeout(() => {
        if (mensajeExito) {
          mensajeExito.style.display = 'none';
        }
      }, 6000);

      console.log('✅ Formulario enviado (simulación)');
      console.log('Datos:', {
        nombre: nombre.value.trim(),
        email: email.value.trim(),
        telefono: telefono.value.trim(),
        mensaje: mensaje.value.trim()
      });
    });

    // Funciones auxiliares
    function marcarError(campo) {
      campo.style.borderColor = '#dc3545';
      campo.style.backgroundColor = '#fff5f5';
    }

    function limpiarErrores() {
      document.querySelectorAll('.form-contacto input, .form-contacto textarea').forEach(function(campo) {
        campo.style.borderColor = '';
        campo.style.backgroundColor = '';
      });
    }

    // Limpiar errores al escribir en los campos
    document.querySelectorAll('.form-contacto input, .form-contacto textarea').forEach(function(campo) {
      campo.addEventListener('input', function() {
        this.style.borderColor = '';
        this.style.backgroundColor = '';
      });
    });
  }
})();