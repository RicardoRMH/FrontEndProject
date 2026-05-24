"use client";

import styles from "./loginModal.module.css";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({
  open,
  onClose,
}: LoginModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          <i className={`ri-close-line ${styles.closeIcon}`}></i>
        </button>

        <h2 className={styles.title}>
          Iniciar Sesión
        </h2>

        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>
              Email
            </label>

            <input
              type="email"
              placeholder="tu@email.com"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Entrar
          </button>
        </form>

        <p className={styles.registerText}>
          ¿No tienes cuenta?
          <span className={styles.registerLink}>
            {" "}Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}