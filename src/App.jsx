import { useState } from 'react'
import './App.css'
import {ChatUIProvider, ChatView, MODAL_POSITION_TYPE} from "@pushprotocol/uiweb";



const PushChatTheme = {
    borderRadius: {
        ChatView: "32px",
        chatProfile: "29px",
        messageInput: "29px",
        searchInput: "99px",
        modal: "16px",
        modalInnerComponents: "12px",
    },

    backgroundColor: {
        ChatViewBackground: "rgba(31,31,31,0.7)",
        chatProfileBackground: "#17181f",
        messageInputBackground: "transparent",
        chatSentBubbleBackground: "#314ce7",
        chatReceivedBubbleBackground: "#424258",
        encryptionMessageBackground: "#2A2A39",
        buttonBackground: "#314ce7",
        modalBackground: "rgba(31,31,31,0.7)",
        criteriaLabelBackground: "rgb(47, 49, 55)",
        modalInputBackground: "rgba(31,31,31,0.7)",
        modalHoverBackground: "rgb(64, 70, 80)",
        buttonDisableBackground: "#787E99",
        toastSuccessBackground:
            "linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)",
        toastErrorBackground:
            "linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)",
        toastShadowBackground: "#00000010",
    },

    fontSize: {
        chatProfileText: "17px",
        messageInputText: "16px",
        chatSentBubbleText: "14px",
        chatReceivedBubbleText: "14px",
        timestamp: "15px",
        // chatBubblesSenderAddressText: '16px',
        encryptionMessageText: "13px",
        chatReceivedBubbleAddressText: "12px",
        chatReceivedBubbleTimestampText: "12px",
        chatSentBubbleTimestampText: "12px",
        searchInputText: "16px",
        searchPlaceholderText: "16px",
    },

    fontWeight: {
        chatProfileText: "500",
        messageInputText: "400",
        chatSentBubbleText: "400",
        chatReceivedBubbleText: "400",
        timestamp: "300",
        // chatBubblesSenderAddressText: '300',
        encryptionMessageText: "400",
        chatReceivedBubbleAddressText: "300",
        chatReceivedBubbleTimestampText: "400",
        chatSentBubbleTimestampText: "400",
        searchInputText: "400",
        searchPlaceholderText: "400",
    },

    fontFamily: "inherit",

    border: {
        ChatView: "1px solid #3A3A4A",
        chatProfile: "1px solid #17181f",
        messageInput: "1px solid #3A3A4A",
        searchInput: "1px solid transparent",
        modal: "none",
        modalInnerComponents: "1px solid rgb(74, 79, 103)",
    },

    iconColor: {
        emoji: "rgba(120, 126, 153, 1)",
        attachment: "rgba(120, 126, 153, 1)",
        sendButton: "rgba(120, 126, 153, 1)",
        groupSettings: "rgba(120, 126, 153, 1)",
    },
    textColor: {
        chatProfileText: "#fff",
        messageInputText: "rgb(182, 188, 214)",
        chatSentBubbleText: "#fff",
        chatReceivedBubbleText: "#fff",
        timestamp: "#87879A",
        // chatBubblesSenderAddressText: 'rgb(182, 188, 214)',
        encryptionMessageText: "rgb(182, 188, 214)",
        buttonText: "#fff",
        chatReceivedBubbleAddressText: "#87879A",
        chatReceivedBubbleTimestampText: "red",
        chatSentBubbleTimestampText: "red",
        searchInputText: "#fff",
        searchPlaceholderText: "rgb(101, 119, 149)",
        modalHeadingText: "#fff",
        modalSubHeadingText: "rgb(182, 188, 214)",
        buttonDisableText: "#B6BCD6",
    },
    backdropFilter: "blur(6.5px)",
    spinnerColor: "#2f2f2f",
    scrollbarColor: "#2f2f2f",
    modalBackgroundColor:'rgba(47, 49, 55, 1)',
    modalPrimaryTextColor: '#B6BCD6',
    modalSearchBarBorderColor: '#4A4F67',
    modalSearchBarBackground: '#282A2E',
    snapFocusBg: '#404650',
    groupButtonBackgroundColor: '#2F3137',
    groupButtonTextColor: '#787E99',
    modalConfirmButtonBorder: '1px solid #787E99',
    groupSearchProfilBackground: '#404650',
    modalInputBorderColor: '#4A4F67',
    snackbarBorderText: '#B6BCD6',
    snackbarBorderIcon:
        'brightness(0) saturate(100%) invert(89%) sepia(8%) saturate(1567%) hue-rotate(191deg) brightness(86%) contrast(93%)',
    modalContentBackground: '#2F3137',
    modalProfileTextColor: '#B6BCD6',
    toastSuccessBackground:
        'linear-gradient(90.15deg, #30CC8B -125.65%, #30CC8B -125.63%, #2F3137 42.81%)',
    toastErrorBackground:
        'linear-gradient(89.96deg, #FF2070 -101.85%, #2F3137 51.33%)',
    toastShadowColor: '#00000010',
    toastBorderColor: '#4A4F67',
    mainBg: '#000',
    modalBorderColor: '#4A4F67',
    modalDescriptionTextColor: '#787E99',
    modalIconColor: '#787E99',
    pendingCardBackground: 'rgba(173, 176, 190, 0.08)',
    modalHeadingColor: '#B6BCD6',
    defaultBorder: '#4A4F67',
};




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="chat-wrapper">
          <ChatUIProvider theme={PushChatTheme}>
              <ChatView
                  chatId="cdaf9ebbdca27440d2a76aed67bbfcb8678768c356185a59517ddc42cac3d8bc"
                  limit={10}
                  isConnected={true}
                  verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
              ></ChatView>
          </ChatUIProvider>
      </div>
    </>
  )
}

export default App
