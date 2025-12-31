document.addEventListener('DOMContentLoaded', init);
let letterOpened = false;
let argueClickedOnce = false;
let argueSequenceComplete = false;
let secondLetterOpened = false;
let currentSwipePage = 0;
let swipeEnabled = false;
function init() {
    start();
}
function start() {
    const bear = document.getElementById('bear-box');
    const talk = document.getElementById('bear-talk');
    const open = document.getElementById('open');
    const proceed = document.getElementById('proceed');
    const letter = document.getElementById('letter-box');
    bear.style.animation = '';
    bear.style.transform = 'scale(0)';
    bear.style.opacity = '0';
    talk.textContent = '';
    talk.style.opacity = '0';
    open.style.display = 'none';
    open.style.opacity = '0';
    open.style.visibility = 'hidden';
    proceed.style.display = 'none';
    proceed.style.opacity = '0';
    proceed.style.visibility = 'hidden';
    letter.style.transform = 'rotateY(0deg)';
    const lines = document.querySelectorAll('.letter-line');
    lines.forEach(line => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(10px)';
    });
    letterOpened = false;
    setTimeout(() => {
        bear.style.animation = 'pop 0.8s ease-out forwards';
        setTimeout(() => {
            type(talk, "nathan's helper.");
            setTimeout(() => {
                open.style.display = 'inline-block';
                open.style.visibility = 'visible';
                setTimeout(() => {
                    open.style.opacity = '1';
                }, 10);
            }, 1500);
        }, 800);
    }, 500);
    open.onclick = openFirstLetter;
    proceed.onclick = () => {
        show('love');
        typeBeforeAnything();
    };
}
function openFirstLetter() {
    if (letterOpened) return;
    letterOpened = true;
    const open = document.getElementById('open');
    const letter = document.getElementById('letter-box');
    const lines = document.querySelectorAll('.letter-line');
    const proceed = document.getElementById('proceed');
    open.style.display = 'none';
    open.style.visibility = 'hidden';
    open.style.opacity = '0';
    letter.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
        let delay = 0;
        lines.forEach(line => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
                line.style.transition = 'all 0.5s ease';
            }, delay);
            delay += 300;
        });
        setTimeout(() => {
            proceed.style.display = 'inline-block';
            proceed.style.visibility = 'visible';
            setTimeout(() => {
                proceed.style.opacity = '1';
            }, 10);
        }, delay + 300);
    }, 1000);
}
function show(page) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('now');
    });
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('now');
    }
    if (page === 'love') {
        const agree = document.getElementById('agree');
        const argue = document.getElementById('argue');
        const continueBtn = document.getElementById('continue');
        agree.style.display = 'inline-block';
        argue.style.display = 'inline-block';
        agree.style.visibility = 'visible';
        argue.style.visibility = 'visible';
        agree.style.opacity = '1';
        argue.style.opacity = '1';
        agree.disabled = false;
        argue.disabled = false;
        agree.style.pointerEvents = 'auto';
        argue.style.pointerEvents = 'auto';
        agree.style.background = '';
        argue.style.background = '';
        argue.textContent = 'i love you more';
        continueBtn.style.display = 'none';
        continueBtn.style.opacity = '0';
        continueBtn.style.visibility = 'hidden';
    }
    if (page === 'second-letter') {
        const open2 = document.getElementById('open-2');
        const letter2 = document.getElementById('letter-2-box');
        const toMain = document.getElementById('to-main');
        open2.style.display = 'inline-block';
        open2.style.visibility = 'visible';
        open2.style.opacity = '1';
        toMain.style.display = 'none';
        toMain.style.opacity = '0';
        toMain.style.visibility = 'hidden';
        letter2.style.transform = 'rotateY(0deg)';
        document.getElementById('letter-2-content').innerHTML = '';
        secondLetterOpened = false;
    }
    if (page === 'main-site') {
        setTimeout(() => {
            initializeMainSite();
        }, 300);
    }
}
function typeBeforeAnything() {
    const message = document.getElementById('message');
    message.textContent = "";
    message.style.color = '#333';
    const text = "before anything... i love you";
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            message.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 80);
        }
    }
    setTimeout(() => {
        typeChar();
    }, 300);
}
function type(element, text) {
    element.textContent = "";
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 50);
        } else {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    }
    typeChar();
}
document.getElementById('agree').addEventListener('click', function() {
    const agree = document.getElementById('agree');
    const argue = document.getElementById('argue');
    const message = document.getElementById('message');
    const continueBtn = document.getElementById('continue');
    agree.disabled = true;
    argue.disabled = true;
    agree.style.pointerEvents = 'none';
    argue.style.pointerEvents = 'none';
    message.textContent = "";
    message.style.color = '#ff6b93';
    let text = "i love you more";
    let i = 0;
    function typeMessage() {
        if (i < text.length) {
            message.textContent += text.charAt(i);
            i++;
            setTimeout(typeMessage, 100);
        } else {
            setTimeout(() => {
                continueBtn.style.display = 'inline-block';
                continueBtn.style.visibility = 'visible';
                continueBtn.style.opacity = '1';
            }, 500);
        }
    }
    typeMessage();
});
document.getElementById('argue').addEventListener('click', function() {
    if (argueClickedOnce || argueSequenceComplete) return;
    const agree = document.getElementById('agree');
    const argue = document.getElementById('argue');
    const message = document.getElementById('message');
    const continueBtn = document.getElementById('continue');
    message.textContent = "are you sure";
    message.style.animation = 'shake 0.5s';
    message.style.color = '#ff8fab';
    message.style.textShadow = '0 0 15px rgba(255, 143, 171, 0.7)';
    argue.textContent = "yes!";
    argue.style.background = 'linear-gradient(45deg, #ff1493, #ff69b4)';
    argue.style.transform = 'scale(1.1)';
    argue.style.boxShadow = '0 0 30px #ff1493';
    setTimeout(() => {
        message.style.animation = '';
    }, 500);
    argue.onclick = function() {
        if (argueClickedOnce || argueSequenceComplete) return;
        argueClickedOnce = true;
        argue.style.transition = 'all 0.5s ease';
        argue.style.transform = 'scale(0) rotate(360deg)';
        argue.style.opacity = '0';
        argue.style.visibility = 'hidden';
        setTimeout(() => {
            argue.style.display = 'none';
            message.textContent = "you thought buddy";
            message.style.color = '#ff6b93';
            message.style.textShadow = '0 0 20px rgba(255, 107, 147, 0.8)';
            agree.style.animation = 'pulse 1s infinite';
            agree.style.transform = 'scale(1.1)';
            agree.style.boxShadow = '0 0 35px rgba(255, 143, 171, 0.8)';
            agree.style.background = 'linear-gradient(45deg, #ff1493, #ff69b4)';
            agree.onclick = function() {
                agree.style.animation = '';
                agree.style.transform = 'scale(1)';
                agree.style.boxShadow = '0 5px 25px rgba(255, 107, 147, 0.5)';
                setTimeout(() => {
                    continueBtn.style.display = 'inline-block';
                    continueBtn.style.visibility = 'visible';
                    continueBtn.style.opacity = '1';
                    argueSequenceComplete = true;
                }, 300);
            };
        }, 500);
    };
});
document.getElementById('continue').addEventListener('click', function() {
    show('second-letter');
});
document.getElementById('open-2').addEventListener('click', function() {
    if (secondLetterOpened) return;
    secondLetterOpened = true;
    const openBtn = document.getElementById('open-2');
    const letter = document.getElementById('letter-2-box');
    const content = document.getElementById('letter-2-content');
    const toMainBtn = document.getElementById('to-main');
    openBtn.style.display = 'none';
    openBtn.style.visibility = 'hidden';
    openBtn.style.opacity = '0';
    letter.style.transform = 'rotateY(180deg)';
    const myMessage = [
        "my perfect celia,",
        "",
        "you mean everything to me.",
        "",
        "every second without you",
        "feels incomplete.",
        "",
        "i hope we will stay together forever",
        "",
        "all my love",
        "nathan"
    ];
    content.innerHTML = '';
    setTimeout(() => {
        let delay = 0;
        myMessage.forEach(line => {
            const p = document.createElement('p');
            p.className = 'letter-line';
            p.style.opacity = '0';
            p.style.transform = 'translateY(10px)';
            p.textContent = line;
            content.appendChild(p);
            setTimeout(() => {
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';
                p.style.transition = 'all 0.5s ease';
            }, delay);
            delay += line === "" ? 100 : 200;
        });
        setTimeout(() => {
            toMainBtn.style.display = 'inline-block';
            toMainBtn.style.visibility = 'visible';
            setTimeout(() => {
                toMainBtn.style.opacity = '1';
            }, 10);
        }, delay + 300);
    }, 1000);
});
document.getElementById('to-main').addEventListener('click', function() {
    const overlay = document.getElementById('transition-overlay');
    const blackhole = document.getElementById('blackhole');
    const pinkC = document.getElementById('pink-c');
    const loadingText = document.getElementById('loading-text');
    const secondLetter = document.getElementById('second-letter');
    secondLetter.style.opacity = '0';
    secondLetter.style.transition = 'opacity 0.3s ease';
    overlay.style.display = 'flex';
    overlay.style.opacity = '1';
    overlay.classList.add('active');
    setTimeout(() => {
        blackhole.style.animation = 'blackhole-grow 3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        const disk = document.querySelector('.accretion-disk');
        const disk2 = document.querySelector('.accretion-disk-2');
        const glow = document.querySelector('.blackhole-glow');
        disk.style.animation = 'disk-appear 2s ease-out forwards, disk-spin 4s linear infinite';
        disk2.style.animation = 'disk-appear-2 2.5s ease-out 0.5s forwards, disk-spin-reverse 6s linear infinite';
        glow.style.animation = 'glow-expand 3s ease-out forwards';
        setTimeout(() => {
            pinkC.style.animation = 'c-appear 1s ease-out forwards, c-pulse 2s ease-in-out 1s infinite';
            setTimeout(() => {
                loadingText.style.animation = 'text-fade 1s ease-out forwards';
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    overlay.style.transition = 'opacity 1s ease';
                    setTimeout(() => {
                        secondLetter.classList.remove('now');
                        secondLetter.style.opacity = '';
                        secondLetter.style.transition = '';
                        overlay.classList.remove('active');
                        overlay.style.display = 'none';
                        overlay.style.opacity = '';
                        overlay.style.transition = '';
                        blackhole.style.animation = '';
                        pinkC.style.animation = '';
                        loadingText.style.animation = '';
                        disk.style.animation = '';
                        disk2.style.animation = '';
                        glow.style.animation = '';
                        show('main-site');
                    }, 1000);
                }, 1500);
            }, 500);
        }, 1500);
    }, 100);
});
function initializeMainSite() {
    currentSwipePage = 0;
    swipeEnabled = false;
    const swipeContent = document.querySelector('.swipe-content');
    swipeContent.style.transform = 'translateX(0%)';
    updateSwipePosition();
    showBearMessage();
    setTimeout(() => {
        swipeEnabled = true;
        setupSwipe();
    }, 2000);
}
function showBearMessage() {
    const speechText = document.getElementById('bear-speech-text');
    speechText.textContent = '';
    speechText.style.opacity = '1';
    const message = "nathan has so many reasons why he loves you...";
    let i = 0;
    function typeMessage() {
        if (i < message.length) {
            speechText.textContent += message.charAt(i);
            i++;
            setTimeout(typeMessage, 60);
        } else {
            setTimeout(() => {
                startAutoSwiping();
            }, 1500);
        }
    }
    setTimeout(() => {
        typeMessage();
    }, 300);
}
function startAutoSwiping() {
    const totalPages = document.querySelectorAll('.swipe-page').length;
    let pageIndex = 1; 
    function swipeToNextPage() {
        if (pageIndex < totalPages) {
            currentSwipePage = pageIndex;
            updateSwipePosition();
            setTimeout(() => {
                showReasonsForCurrentPage();
                setTimeout(() => {
                    pageIndex++;
                    swipeToNextPage();
                }, 5000); 
            }, 800);
        } else {
            setTimeout(() => {
                showFinalMessage();
            }, 800);
        }
    }
    swipeToNextPage();
}
function showReasonsForCurrentPage() {
    const currentPage = document.querySelectorAll('.swipe-page')[currentSwipePage];
    const reasons = currentPage.querySelectorAll('.reason');
    reasons.forEach((reason, index) => {
        setTimeout(() => {
            reason.classList.add('show');
        }, index * 400);
    });
}
function showFinalMessage() {
    const finalTexts = document.querySelectorAll('.final-text');
    finalTexts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('show');
        }, index * 800);
    });
}
function updateSwipePosition() {
    const swipeContent = document.querySelector('.swipe-content');
    const pages = document.querySelectorAll('.swipe-page');
    const dots = document.querySelectorAll('.swipe-dot');
    const totalPages = pages.length;
    const percentage = 100 / totalPages;
    const position = -currentSwipePage * percentage;
    swipeContent.style.transform = `translateX(${position}%)`;
    pages.forEach((page, index) => {
        if (index === currentSwipePage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
    dots.forEach((dot, index) => {
        if (index === currentSwipePage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
function setupSwipe() {
    let startX = 0;
    let isDragging = false;
    const swipeArea = document.querySelector('.swipe-area');
    const totalPages = document.querySelectorAll('.swipe-page').length;
    swipeArea.addEventListener('touchstart', (e) => {
        if (!swipeEnabled) return;
        startX = e.touches[0].clientX;
        isDragging = true;
        e.preventDefault();
    }, { passive: false });
    swipeArea.addEventListener('touchmove', (e) => {
        if (!isDragging || !swipeEnabled) return;
        e.preventDefault();
    }, { passive: false });
    swipeArea.addEventListener('touchend', (e) => {
        if (!isDragging || !swipeEnabled) return;
        isDragging = false;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentSwipePage < totalPages - 1) {
                currentSwipePage++;
                updateSwipePosition();
                showReasonsForCurrentPage();
            } else if (diff < 0 && currentSwipePage > 0) {
                currentSwipePage--;
                updateSwipePosition();
                showReasonsForCurrentPage();
            }
        }
    });
    swipeArea.addEventListener('mousedown', (e) => {
        if (!swipeEnabled) return;
        startX = e.clientX;
        isDragging = true;
        e.preventDefault();
    });
    swipeArea.addEventListener('mousemove', (e) => {
        if (!isDragging || !swipeEnabled) return;
        e.preventDefault();
    });
    swipeArea.addEventListener('mouseup', (e) => {
        if (!isDragging || !swipeEnabled) return;
        isDragging = false;
        const endX = e.clientX;
        const diff = startX - endX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentSwipePage < totalPages - 1) {
                currentSwipePage++;
                updateSwipePosition();
                showReasonsForCurrentPage();
            } else if (diff < 0 && currentSwipePage > 0) {
                currentSwipePage--;
                updateSwipePosition();
                showReasonsForCurrentPage();
            }
        }
    });
    swipeArea.addEventListener('mouseleave', () => {
        isDragging = false;
    });
    document.addEventListener('keydown', (e) => {
        if (!swipeEnabled) return;
        if (e.key === 'ArrowRight' && currentSwipePage < totalPages - 1) {
            currentSwipePage++;
            updateSwipePosition();
            showReasonsForCurrentPage();
        } else if (e.key === 'ArrowLeft' && currentSwipePage > 0) {
            currentSwipePage--;
            updateSwipePosition();
            showReasonsForCurrentPage();
        }
    });
}