import React from 'react'

function UserKocht() {

  return (
    <div className="userKocht">
      <h1 className="contTitle">UserKocht</h1>

      <div className="userGroup">
          <div className="userBox">
            <div className="user userRec1">
              <ul>
                <p className="userTitle">10대 유저</p>
                <li>desc1</li>
                <li>desc2</li>
                <li>desc3</li>
                <li>desc4</li>
              </ul>
            </div>
            <div className="user userRec2">
              <ul>
                <p className="userTitle">20대 유저</p>
                <li>desc1</li>
                <li>desc2</li>
                <li>desc3</li>
                <li>desc4</li>
              </ul>
            </div>
            <div className="user userRec3">
              <ul>
                <p className="userTitle">30대 유저</p>
                <li>desc1</li>
                <li>desc2</li>
                <li>desc3</li>
                <li>desc4</li>
              </ul>
            </div>
            <div className="user userRec4">
              <ul>
                <p className="userTitle">40대 유저</p>
                <li>desc1</li>
                <li>desc2</li>
                <li>desc3</li>
                <li>desc4</li>
              </ul>
            </div>
            <div className="user userRec5">
              <ul>
                <p className="userTitle">그룹 추가</p>
                <li>
                  <span className="plus"></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="vsKocht">
            <p className="vsDrag">비교하고 싶은 코호트를 드래그하세요.</p>
            <span className="vs">VS</span>
            <p className="vsDrag">비교하고 싶은 코호트를 드래그하세요.</p>
          </div>
        </div>

      <div className="line"></div>
    </div>
  )
}

export default UserKocht
