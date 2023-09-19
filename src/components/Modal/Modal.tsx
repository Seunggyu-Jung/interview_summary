import { useEffect, MouseEvent } from 'react';
import React from 'react';
import * as S from './Modal.styled';
import { IModal } from 'types/dataTypes';

export default function Modal({ children, closeModal }: IModal) {
  const clickOutsideModal = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement && e.target.nodeName === 'DIALOG')
      closeModal();
  };

  const preventScroll = () => {
    const currentScrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.overflow = 'scroll';
    return currentScrollY;
  };

  const allowScroll = (prevScroll: number) => {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, prevScroll);
  };

  const handleEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && e.target instanceof HTMLElement) {
      closeModal();
      e.target.blur();
    }
  };

  useEffect(() => {
    const prevScroll = preventScroll();
    document.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
      document.body.style.overflow = '';

      allowScroll(prevScroll);
    };
  });

  return (
    <>
      <S.modalBox onClick={clickOutsideModal}>{children}</S.modalBox>
    </>
  );
}
