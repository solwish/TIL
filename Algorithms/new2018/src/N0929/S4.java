package N0929;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class S4 {

	public static void main(String[] args) throws IOException {
		try (final BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
			final int n = Integer.parseInt(br.readLine());
			for (int i = 0; i < n; i++) {
				final StringTokenizer tokenizer = new StringTokenizer(br.readLine());
				String method = tokenizer.nextToken();
				String url = tokenizer.nextToken();
				String body = null;
				if (tokenizer.hasMoreTokens()) {
					body = tokenizer.nextToken();
				}

				//
				int url_index = url.indexOf("/", 1);
				String url_ = url.substring(0, url_index);
				String data = url.substring(url_index + 1, url.length());
				System.out.print(method + " ");
				System.out.print(url_ + " ");
				System.out.print(data + " ");
				System.out.println(body);
			}
		}
	}

}
