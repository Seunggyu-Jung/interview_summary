import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Footer.styled';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import github from 'image/icon-github.svg';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickContact = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  return (
    <S.Footer>
      <p>IT 집현전 로고</p>
      <section>
        <p>본 웹페이지는 포트폴리오용 비영리 페이지 입니다.</p>
        <p>IT집현전 (정승규, 이선근). ©2023. All Rights Reserved. </p>
        <Button type="middle" onClick={clickContact}>
          contect us
        </Button>
        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <S.modalContainer>
              <p>페이지 개발자 깃헙 바로가기</p>
              <Link to="https://github.com/Seunggyu-Jung">
                <S.modalAnchor>정승규의 GitHub</S.modalAnchor>
              </Link>
              <Link to="https://github.com/5unk3n">
                <S.modalAnchor>이선근의 GitHub</S.modalAnchor>
              </Link>
            </S.modalContainer>
          </Modal>
        )}
      </section>
      <Link to="https://github.com/Seunggyu-Jung/interview_summary">
        <S.GithubBtn src={github} alt="" />
      </Link>
    </S.Footer>
  );
};

export default Footer;
