import React from 'react';
import './mediaFooter.css';

const Footer = () => {
  return (
    <footer className="footer">

      <div className='footer-link'>
        <div className='footer-icon'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.16366 10.033C3.05943 10.1278 3 10.2621 3 10.403V20.1818C3 20.1818 3 20.1818 3 20.1818C3 20.1818 3 22 4.8 22C6.6 22 19.2 22 19.2 22C19.2 22 19.2 22 19.2 22C19.2 22 21 22 21 20.1818C21 18.5406 21 11.7145 21 10.401C21 10.2601 20.9406 10.1278 20.8363 10.033L12.3363 2.30576C12.1456 2.13239 11.8544 2.13239 11.6637 2.30576L3.16366 10.033Z" stroke="black" stroke-width="1.5"/>
          </svg>
        </div>
      </div>
            
      <div className='footer-link'>
        <div className='footer-icon'>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="65" height="65" fill="white" fill-opacity="0.01"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1066 54.4604H23.0645C13.9251 54.4604 6.48924 47.0246 6.48924 37.8852C6.48924 28.7457 13.9251 21.3111 23.0645 21.3111H41.1066C50.246 21.3111 57.6819 28.7457 57.6819 37.8852C57.6819 47.0246 50.246 54.4604 41.1066 54.4604ZM41.1066 17.1155H34.0341V10.2228C34.0341 9.06427 33.0939 8.12469 31.936 8.12469C30.7774 8.12469 29.8379 9.06427 29.8379 10.2228V17.1155H23.0645C11.611 17.1155 2.29297 26.4323 2.29297 37.8852C2.29297 49.338 11.611 58.6567 23.0645 58.6567H41.1066C52.5595 58.6567 61.8781 49.338 61.8781 37.8852C61.8781 26.4323 52.5595 17.1155 41.1066 17.1155Z" fill="#121212"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5916 35.8813H20.1864V33.4761C20.1864 32.3176 19.2462 31.378 18.0883 31.378C16.9297 31.378 15.9902 32.3176 15.9902 33.4761V35.8813H13.585C12.4264 35.8813 11.4868 36.8209 11.4868 37.9795C11.4868 39.1374 12.4264 40.0776 13.585 40.0776H15.9902V42.4828C15.9902 43.6408 16.9297 44.5809 18.0883 44.5809C19.2462 44.5809 20.1864 43.6408 20.1864 42.4828V40.0776H22.5916C23.7502 40.0776 24.6898 39.1374 24.6898 37.9795C24.6898 36.8209 23.7502 35.8813 22.5916 35.8813Z" fill="#121212"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M42.3864 31.093C40.5109 31.093 38.9902 32.6136 38.9902 34.4891C38.9902 36.3652 40.5109 37.8859 42.3864 37.8859C44.2619 37.8859 45.7826 36.3652 45.7826 34.4891C45.7826 32.6136 44.2619 31.093 42.3864 31.093Z" fill="#121212"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.1789 37.8856C47.3034 37.8856 45.7827 39.4063 45.7827 41.2818C45.7827 43.1579 47.3034 44.6786 49.1789 44.6786C51.0544 44.6786 52.575 43.1579 52.575 41.2818C52.575 39.4063 51.0544 37.8856 49.1789 37.8856Z" fill="#121212"/>
          </svg>
        </div>
      </div>
      <div className='footer-link'>
        <div className='footer-icon'>
          <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="65" height="65" fill="white" fill-opacity="0.01"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M58.0963 30.4022H47.654C46.6264 22.9493 40.2311 17.1853 32.4999 17.1853C28.1208 17.1853 24.1747 19.043 21.3811 22V6.90393H58.0963V30.4022ZM21.3811 32.5003C21.3811 26.3693 26.3695 21.3809 32.4999 21.3809C38.6309 21.3809 43.6193 26.3693 43.6193 32.5003C43.6193 38.6307 38.6309 43.6191 32.4999 43.6191C26.3695 43.6191 21.3811 38.6307 21.3811 32.5003ZM58.0963 58.0955H6.90473V34.5984H17.3457C18.374 42.0513 24.7693 47.8153 32.4999 47.8153C40.2311 47.8153 46.6264 42.0513 47.654 34.5984H58.0963V58.0955ZM6.90473 30.4022H17.1849V6.90393H6.90473V30.4022ZM60.1944 2.70831H4.80661C3.64745 2.70831 2.7085 3.64727 2.7085 4.80643V32.5003V60.1936C2.7085 61.3528 3.64745 62.2917 4.80661 62.2917H60.1944C61.3529 62.2917 62.2919 61.3528 62.2919 60.1936V32.5003V4.80643C62.2919 3.64727 61.3529 2.70831 60.1944 2.70831Z" fill="#121212"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M43.3804 14.625H48.4321C49.5055 14.625 50.375 13.9584 50.375 13.1354C50.375 12.3129 49.5055 11.6458 48.4321 11.6458H43.3804C42.307 11.6458 41.4375 12.3129 41.4375 13.1354C41.4375 13.9584 42.307 14.625 43.3804 14.625Z" fill="#121212"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4999 28.9722C34.4451 28.9722 36.028 30.5551 36.028 32.5003C36.028 34.4455 34.4451 36.0278 32.4999 36.0278C30.5547 36.0278 28.9724 34.4455 28.9724 32.5003C28.9724 30.5551 30.5547 28.9722 32.4999 28.9722ZM32.4999 39.9479C36.6068 39.9479 39.9481 36.6072 39.9481 32.5003C39.9481 28.3933 36.6068 25.0521 32.4999 25.0521C28.3929 25.0521 25.0522 28.3933 25.0522 32.5003C25.0522 36.6072 28.3929 39.9479 32.4999 39.9479Z" fill="#121212"/>
          </svg>
        </div>
        </div>
            <div className='footer-link'>
              <div className='footer-icon'>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="65" height="65" fill="white" fill-opacity="0.01"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.251 20.6116C19.6624 20.6116 17.8934 18.3238 17.8934 15.0402C17.8934 11.7578 19.6624 9.47007 21.251 9.47007C22.8384 9.47007 24.6068 11.7578 24.6068 15.0402C24.6068 18.3238 22.8384 20.6116 21.251 20.6116ZM21.251 5.2738C17.0156 5.2738 13.6978 9.56427 13.6978 15.0402C13.6978 19.5711 15.9708 23.2817 19.1529 24.4317V58.3272C19.1529 59.4852 20.0925 60.4248 21.251 60.4248C22.4096 60.4248 23.3492 59.4852 23.3492 58.3272V24.4311C26.53 23.2811 28.8031 19.5705 28.8031 15.0402C28.8031 9.56427 25.4852 5.2738 21.251 5.2738Z" fill="#121212"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.5459 5.27386C46.3873 5.27386 45.4478 6.21344 45.4478 7.372V20.5187H44.1883V7.372C44.1883 6.21344 43.2487 5.27386 42.0908 5.27386C40.9322 5.27386 39.9926 6.21344 39.9926 7.372V20.5187H38.7344V7.372C38.7344 6.21344 37.7948 5.27386 36.6362 5.27386C35.4783 5.27386 34.5381 6.21344 34.5381 7.372V22.6168C34.5381 23.7748 35.4783 24.7149 36.6362 24.7149H39.9926V58.3273C39.9926 59.4852 40.9322 60.4248 42.0908 60.4248C43.2487 60.4248 44.1883 59.4852 44.1883 58.3273V24.7149H47.5459C48.7045 24.7149 49.644 23.7748 49.644 22.6168V7.372C49.644 6.21344 48.7045 5.27386 47.5459 5.27386Z" fill="#121212"/>
                </svg>
              </div>
            </div>
            <div className='footer-link'>
              <div className='footer-icon'>
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="65" height="65" fill="white" fill-opacity="0.01"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M49.3214 48.0156C48.9762 48.1064 48.6438 48.2534 48.3723 48.5242C48.1022 48.7944 47.9546 49.1262 47.8631 49.4708C43.7785 53.1998 38.3656 55.4955 32.4123 55.4955C26.1382 55.4955 20.2794 53.0131 15.9143 48.5053C11.7444 44.1994 9.44809 38.526 9.44809 32.5312C9.44809 27.8435 10.8661 23.4833 13.2868 19.8458C13.3936 19.6854 13.5089 19.5323 13.6186 19.3755C13.9041 18.9687 14.2005 18.5699 14.5109 18.1832C14.6256 18.0398 14.7409 17.8965 14.8586 17.7556C15.7259 16.7273 16.6785 15.7734 17.7111 14.9104C17.8044 14.833 17.9002 14.7579 17.9947 14.6817C18.4467 14.3158 18.9126 13.9675 19.392 13.6357C19.492 13.5668 19.5896 13.4954 19.6909 13.4277C23.3357 10.9924 27.7093 9.56641 32.4123 9.56641C37.1086 9.56641 41.4755 10.9887 45.1173 13.4174C45.2338 13.4948 45.3466 13.5778 45.4619 13.6577C45.9224 13.9773 46.3706 14.3121 46.8055 14.6634C46.9128 14.75 47.022 14.8342 47.1275 14.9226C47.6514 15.3611 48.1601 15.8173 48.6425 16.2998L48.645 16.3022C49.1061 16.7639 49.5391 17.2506 49.9593 17.7483C50.0825 17.8947 50.2021 18.0435 50.3216 18.1929C50.6272 18.5741 50.9187 18.9669 51.2005 19.367C51.3127 19.528 51.431 19.6848 51.5396 19.8488C53.9591 23.4857 55.3771 27.8447 55.3771 32.5312C55.3771 38.5004 53.0686 43.9273 49.3214 48.0156ZM6.89197 12.719C6.89197 9.50603 9.50542 6.89197 12.7178 6.89197C14.7866 6.89197 16.6688 8.00078 17.7056 9.71645C17.6184 9.77256 17.5403 9.84087 17.4537 9.8982C17.0628 10.1574 16.692 10.4422 16.3156 10.7204C15.954 10.9881 15.5838 11.2437 15.2361 11.5285C14.8878 11.8133 14.5646 12.1262 14.231 12.4287C13.7809 12.8361 13.3369 13.2478 12.9148 13.6845C12.4061 14.2109 11.9066 14.7464 11.4413 15.3123C11.2449 15.5514 11.0729 15.8106 10.8844 16.057C10.5093 16.5456 10.1355 17.0353 9.7933 17.5495C9.76158 17.5983 9.72255 17.6416 9.69022 17.6904C7.99102 16.6505 6.89197 14.7738 6.89197 12.719ZM52.1056 6.89197C55.3186 6.89197 57.9333 9.50603 57.9333 12.719C57.9333 14.7738 56.8342 16.6505 55.1344 17.6904C55.1027 17.6416 55.0643 17.5983 55.0319 17.5501C54.6843 17.0274 54.3049 16.5303 53.9237 16.0339C53.742 15.7972 53.5761 15.5472 53.387 15.3166C52.8546 14.6689 52.2898 14.0498 51.7012 13.454C51.3688 13.1179 51.012 12.8099 50.6632 12.4915C50.3058 12.1658 49.9581 11.831 49.5836 11.5242C49.2439 11.2461 48.881 10.996 48.5273 10.7344C48.1449 10.4508 47.7679 10.1611 47.3703 9.89759C47.2843 9.84026 47.2062 9.77256 47.1196 9.71645C48.1546 8.00078 50.038 6.89197 52.1056 6.89197ZM52.99 50.1899C57.0745 45.4375 59.5605 39.2744 59.5605 32.5312C59.5605 28.5382 58.6725 24.7568 57.1178 21.3388C60.1362 19.5744 62.1166 16.3199 62.1166 12.719C62.1166 7.19875 57.6253 2.70801 52.1056 2.70801C48.4809 2.70801 45.2155 4.70789 43.4583 7.7556C40.0794 6.24303 36.348 5.38306 32.4123 5.38306C28.4772 5.38306 24.7446 6.24303 21.3657 7.7556C19.6097 4.70789 16.3443 2.70801 12.7178 2.70801C7.19814 2.70801 2.70801 7.19875 2.70801 12.719C2.70801 16.3199 4.68838 19.5744 7.70742 21.3388C6.15276 24.7568 5.26413 28.5382 5.26413 32.5312C5.26413 39.0713 7.6019 45.2704 11.8328 50.1917L3.31974 58.7225C2.50369 59.5404 2.50491 60.8645 3.32218 61.6805C3.73082 62.0886 4.26449 62.2916 4.79999 62.2916C5.33671 62.2916 5.8716 62.0873 6.28023 61.6775L14.7775 53.1632C19.686 57.377 25.8552 59.6794 32.4123 59.6794C39.1359 59.6794 45.2832 57.2087 50.0301 53.1461L58.545 61.6775C58.953 62.0873 59.4885 62.2916 60.0252 62.2916C60.5601 62.2916 61.0938 62.0886 61.5024 61.6805C62.3197 60.8645 62.3209 59.5404 61.5055 58.7225L52.99 50.1899Z" fill="#121212"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.3931 30.4392H34.5048V19.5597C34.5048 18.4039 33.5673 17.4677 32.4128 17.4677C31.2576 17.4677 30.3208 18.4039 30.3208 19.5597V32.5312C30.3208 33.6864 31.2576 34.6232 32.4128 34.6232H41.3931C42.5482 34.6232 43.485 33.6864 43.485 32.5312C43.485 31.3754 42.5482 30.4392 41.3931 30.4392Z" fill="#121212"/>
                </svg>
              </div>
            </div>  
    </footer>
  );
}

export default Footer;