# 6주차 과제 0412

## 회원 가입 페이지 코드

### SignupPage.js

```jsx
import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import TermsCheckbox from './TermsCheckbox';
import ProfilePictureUpload from './ProfilePictureUpload';
import styles from './SignupPage.module.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleInputChange = (inputName, value) => {
    if (inputName === 'email') {
      setEmail(value);
    } else if (inputName === 'password') {
      setPassword(value);
    }
  };

  const handleCheckboxChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Signup with Email: ${email}, Password: ${password}, Terms: ${isTermsChecked}, Profile Picture: ${profilePicture ? profilePicture.name : 'None'}`);
  };

  return (
    <div className={styles.signupPageContainer}>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <InputField label="이메일" type="email" name="email" value={email} onChange={handleInputChange} />
        <InputField label="비밀번호" type="password" name="password" value={password} onChange={handleInputChange} />
        <TermsCheckbox isChecked={isTermsChecked} onCheckboxChange={handleCheckboxChange} />
        <ProfilePictureUpload onFileChange={handleFileChange} />
        <SubmitButton label="회원가입" />
      </form>
    </div>
  );
}

export default SignupPage;
```

### InputField.js

```jsx
import React from 'react';
import styles from './InputField.module.css';

function InputField({ label, type, name, value, onChange }) {
  return (
    <div className={styles.inputFieldContainer}>
      <label className={styles.inputLabel}>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className={styles.inputField}
        />
      </label>
    </div>
  );
}

export default InputField;
```

### **SubmitButton.js**

```jsx
import React from 'react';

function SubmitButton({ label }) {
  return (
    <button type="submit">{label}</button>
  );
}

export default SubmitButton;
```

### **TermsCheckbox.js**

```jsx
import React from 'react';

function TermsCheckbox({ isChecked, onCheckboxChange }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
        이용 약관에 동의합니다.
      </label>
    </div>
  );
}

export default TermsCheckbox;
```

### **ProfilePictureUpload.js**

```jsx
import React from 'react';

function ProfilePictureUpload({ onFileChange }) {
  return (
    <div>
      <label htmlFor="profilePicture">프로필 사진 업로드:</label>
      <input
        type="file"
        id="profilePicture"
        name="profilePicture"
        onChange={onFileChange}
      />
    </div>
  );
}

export default ProfilePictureUpload;
```

### **InputField.module.css**

```css
.inputFieldContainer {
    margin-bottom: 15px;
  }
  
  .inputLabel {
    display: block;
    margin-bottom: 5px;
  }
  
  .inputField {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
```

### **SignupPage.module.css**

```css
.signupPageContainer {
    max-width: 500px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .signupForm {
    display: flex;
    flex-direction: column;
  }
```

## 결과

![Untitled](6%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6%200412%20e29aa1e57e694fa7a9c8679ae70cf466/Untitled.png)

### 이메일의 형식이 이상할 경우

![Untitled](6%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6%200412%20e29aa1e57e694fa7a9c8679ae70cf466/Untitled%201.png)

![Untitled](6%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A6%200412%20e29aa1e57e694fa7a9c8679ae70cf466/Untitled%202.png)