import React, { useState } from "react";

import * as S from "./styled";

import birds from "../../assets/images/birds.jpg";
import campfire from "../../assets/images/campfire.jpg";
import cavern from "../../assets/images/cavern.jpg";
import crickets from "../../assets/images/crickets.jpg";
import rain from "../../assets/images/rain.jpg";
import relax from "../../assets/images/relax.jpg";

const AmbienceList = () => {
  const [animation, setAnimation] = useState("");

  return (
    <>
      <S.ImgAmbience bg={animation} />
      <S.ListWrapper className="Ambience">
        <S.ImgList
          src={birds}
          alt="imagem"
          title="imagem"
          onClick={(e) => setAnimation(birds)}
        />
        <S.ImgList
          src={campfire}
          alt="imagem"
          title="imagem"
          onClick={(e) => setAnimation(campfire)}
        />
        <S.ImgList
          src={cavern}
          alt="imagem"
          title="imagem"
          onClick={(e) => setAnimation(cavern)}
        />
        <S.ImgList
          src={crickets}
          alt="imagem"
          title="imagem"
          onClick={(e) => setAnimation(crickets)}
        />
        <S.ImgList
          src={rain}
          alt="imagem"
          title="imagem"
          onClick={(e) => setAnimation(rain)}
        />
        <S.ImgList
          src={relax}
          alt="imagem"
          title="imagem"
          onClick={(e) => setAnimation(relax)}
        />
      </S.ListWrapper>
    </>
  );
};

export default AmbienceList;
