import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiXMark } from "react-icons/hi2";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  const [seconds, setSeconds] = useState(5);
  const [isCancelled, setIsCancelled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isCancelled && seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (!isCancelled && seconds === 0) {
      navigate("/");
    }
  }, [seconds, isCancelled, navigate]);

  const handleCancel = () => {
    setIsCancelled(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>
          <span>4</span>
          <HiOutlineExclamationTriangle className={styles.icon} />
          <span>4</span>
        </div>

        <h1 className={styles.title}>
          {isCancelled
            ? "O que você ainda está fazendo aqui?"
            : "System_Error: Pagina_Nao_Encontrada"}
        </h1>

        <p className={styles.description}>
          {isCancelled
            ? "Você interrompeu o protocolo. Este diretório está vazio. Não há nada para ver além de poeira binária."
            : "A rota solicitada não existe. Iniciando protocolo de retorno automático para o início."}
        </p>

        <div className={styles.terminal}>
          <p className={styles.line}>
            <span>&gt;</span> status: 404_not_found
          </p>
          {!isCancelled ? (
            <p className={styles.line}>
              <span>&gt;</span> retornando_em:{" "}
              <b className={styles.timer}>{seconds}s</b>
            </p>
          ) : (
            <p className={styles.line}>
              <span>&gt;</span> protocolo:{" "}
              <b className={styles.alert}>INTERROMPIDO_PELO_USUARIO</b>
            </p>
          )}
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.backBtn}>
            <HiArrowLeft size={20} />
            Voltar Agora
          </Link>

          {!isCancelled && (
            <button onClick={handleCancel} className={styles.cancelBtn}>
              <HiXMark size={20} />
              Cancelar
            </button>
          )}
        </div>
      </div>
    </main>
  );
};
